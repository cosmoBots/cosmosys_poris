require 'erb'

module CosmosysPoris
  class ModelXmlExporter
    SCOPES = %w[node project node_down].freeze
    NODE_TYPES = {
      'poris_sys' => ['sub-system', 'PORISNode', 'PORISNode'],
      'poris_param' => ['sub-system', 'PORISNode', 'PORISNode'],
      'poris_mode' => ['mode', 'PORISMode', 'PORISMode'],
      'poris_value' => ['value', 'PORISValue', 'PORISValue'],
      'poris_cmd' => ['command', 'PORISCmd', 'PORISCmd']
    }.freeze

    def initialize(project, user: User.current, scope: 'project', issue: nil)
      @project = project
      @user = user
      @scope = SCOPES.include?(scope.to_s) ? scope.to_s : 'project'
      @issue = issue
    end

    def render
      candidate_items = visible_candidate_items
      @items = select_scoped_items(candidate_items).index_by(&:id)
      @children = @items.values.group_by(&:parent_issue_id)

      output = ['<poris id="systems">']
      roots = model_roots
      output << synthetic_root_xml if !(roots.one? && %w[poris_sys poris_param].include?(roots.first.cosmosys_item_kind_key))
      @items.values.sort_by(&:id).each { |issue| output << item_xml(issue) }
      output << '</poris>'
      output.join
    end

    private

    def visible_candidate_items
      project_ids = scoped_project_ids
      candidates = Issue.visible(@user)
                        .where(project_id: project_ids)
                        .includes(:parent, cosmosys_poris_labels: :label_scope)
                        .to_a
                        .select(&:cosmosys_poris?)
      ordered = order_by_tree_position(candidates)
      @tree_order_index = ordered.each_with_index.to_h { |item, index| [item.id, index] }
      ordered
    end

    def scoped_project_ids
      case @scope
      when 'node'
        ([@project.id] + focused_ancestor_project_ids).uniq
      when 'node_down'
        anchor_project = scope_anchor&.project
        projects = (anchor_project || @project).self_and_descendants
        (projects.pluck(:id) + [@project.id]).uniq
      else
        @project.self_and_descendants
      end
    end

    def select_scoped_items(candidates)
      return candidates if @scope == 'project' || @issue.nil?

      return select_focused_items(candidates) if focused_non_container_issue?

      anchor = scope_anchor
      return [] unless anchor

      by_parent = candidates.group_by(&:parent_issue_id)
      selected = {}
      queue = [anchor]
      until queue.empty?
        item = queue.shift
        next if selected.key?(item.id) || !item.cosmosys_poris?

        selected[item.id] = item
        queue.concat(Array(by_parent[item.id]))
      end
      selected_items = selected.values
      if @scope == 'node' && anchor.cosmosys_item_kind_key == 'poris_sys'
        selected_items.reject { |item| item.cosmosys_item_kind_key == 'poris_value' }
      else
        selected_items
      end
    end

    def focused_non_container_issue?
      @issue&.cosmosys_poris? && %w[poris_mode poris_value].include?(@issue.cosmosys_item_kind_key)
    end

    def focused_ancestor_project_ids
      return [] unless focused_non_container_issue?

      parent = @issue.parent
      ids = []
      while parent
        ids << parent.project_id
        break if %w[poris_sys poris_param].include?(parent.cosmosys_item_kind_key)

        parent = parent.parent
      end
      ids
    end

    # A focused mode/value is rendered from its containing parameter/system,
    # with only the PORIS branch that can keep the selected item available.
    def select_focused_items(candidates)
      @candidate_items_by_id = candidates.index_by(&:id)
      @candidate_children = candidates.group_by(&:parent_issue_id)
      mode_ids = candidates.select { |item| item.cosmosys_item_kind_key == 'poris_mode' }.map(&:id)
      @block_targets = IssueRelation.where(issue_from_id: mode_ids, relation_type: 'blocks')
                                    .order(:id)
                                    .pluck(:issue_from_id, :issue_to_id)
                                    .group_by(&:first)
                                    .transform_values { |relations| relations.map(&:last) }
      @focused_items = {}
      @focused_container_destinations = {}
      @focused_container_modes = {}
      @focused_mode_destinations = {}

      container = @candidate_items_by_id[@issue.parent_issue_id]
      return [] unless container&.cosmosys_poris? && %w[poris_sys poris_param].include?(container.cosmosys_item_kind_key)

      if @issue.cosmosys_item_kind_key == 'poris_mode'
        include_focused_mode(container, @issue, {})
      else
        include_focused_value(container, @issue)
      end

      @focused_items.values
    end

    def include_focused_mode(container, mode, visiting)
      return if visiting[mode.id]

      visiting[mode.id] = true
      @focused_items[container.id] = container
      @focused_items[mode.id] = mode
      add_focused_container_commands(container)

      targets = focused_block_targets(mode)
      @focused_mode_destinations[mode.id] = targets.map(&:id)
      @focused_container_modes[container.id] = [mode.id]

      child_container_ids = []
      targets.each do |target|
        @focused_items[target.id] = target
        next unless target.cosmosys_item_kind_key == 'poris_mode'

        child_container = @candidate_items_by_id[target.parent_issue_id]
        next unless child_container&.cosmosys_poris? &&
                    %w[poris_sys poris_param].include?(child_container.cosmosys_item_kind_key) &&
                    child_container.parent_issue_id == container.id

        child_container_ids << child_container.id
        include_focused_mode(child_container, target, visiting)
      end

      @focused_container_destinations[container.id] = [mode.id, *child_container_ids].uniq
    end

    def include_focused_value(container, value)
      @focused_items[container.id] = container
      @focused_items[value.id] = value
      add_focused_container_commands(container)

      activating_modes = Array(@candidate_children[container.id]).select do |child|
        child.cosmosys_item_kind_key == 'poris_mode' && Array(@block_targets[child.id]).include?(value.id)
      end
      @focused_container_modes[container.id] = activating_modes.map(&:id)
      @focused_container_destinations[container.id] = activating_modes.map(&:id)
      activating_modes.each do |mode|
        @focused_items[mode.id] = mode
        @focused_mode_destinations[mode.id] = [value.id]
      end
    end

    def focused_block_targets(mode)
      Array(@block_targets[mode.id]).filter_map { |id| @candidate_items_by_id[id] }
        .select { |target| %w[poris_mode poris_value].include?(target.cosmosys_item_kind_key) }
        .sort_by { |target| tree_order_key(target) }
    end

    def add_focused_container_commands(container)
      Array(@candidate_children[container.id]).each do |child|
        @focused_items[child.id] = child if child.cosmosys_item_kind_key == 'poris_cmd'
      end
    end

    def scope_anchor
      return @scope_anchor if defined?(@scope_anchor)

      cursor = @issue
      anchor = cursor if cursor&.cosmosys_poris? && %w[poris_sys poris_param].include?(cursor.cosmosys_item_kind_key)
      while anchor.nil? && cursor&.parent
        parent = cursor.parent
        break if @scope == 'node' && parent.project_id != @project.id

        cursor = parent
        if cursor.cosmosys_poris? && %w[poris_sys poris_param].include?(cursor.cosmosys_item_kind_key)
          anchor = cursor
          break
        end
      end
      @scope_anchor = anchor || @issue
    end

    def model_roots
      @items.values.select { |issue| issue.parent_issue_id.blank? || !@items.key?(issue.parent_issue_id) }
    end

    def synthetic_root_xml
      node_element('sub-system', id: -@project.id, name: @project.name, type: 'PORISNode', ident: "project:#{@project.identifier}", project_id: @project.id) do
        add_labels([]) + add_destinations(model_roots) + add_node_attributes + add_default_mode('sub-system')
      end
    end

    def item_xml(issue)
      tag, xml_type, _destination_type = node_definition(issue)
      node_element(tag, id: issue.id, name: issue.subject, type: xml_type, ident: issue.pr_src_label.presence || issue.csid, project_id: issue.project_id) do
        add_labels(issue.cosmosys_poris_labels.to_a) +
          add_destinations(destinations_for(issue)) +
          add_command_references(issue) +
          add_node_attributes +
          add_value_fields(issue) +
          add_default_mode(tag, issue: issue)
      end
    end

    def node_element(tag, id:, name:, type:, ident:, project_id:)
      fields = [
        xml_element('name', name),
        xml_element('id', id, type: 'integer'),
        xml_element('type', type),
        xml_element('node-type-id', node_type_id(type), type: 'integer'),
        xml_element('ident', ident),
        xml_element('project-id', project_id, type: 'integer')
      ]
      "<#{tag}>#{fields.join}#{yield}</#{tag}>"
    end

    def node_type_id(type)
      { 'PORISNode' => 4, 'PORISValue' => 5, 'PORISMode' => 6, 'PORISValueFloat' => 0, 'PORISValueString' => 0, 'PORISCmd' => 7 }.fetch(type)
    end

    def add_labels(labels)
      entries = labels.map do |item_label|
        "<label>#{xml_element('name', item_label.label)}<scope-kind>#{xml_element('name', item_label.label_scope.key)}</scope-kind></label>"
      end
      "<labels type=\"array\">#{entries.join}</labels>"
    end

    def add_destinations(issues)
      entries = issues.map do |issue|
        target_type = node_definition(issue).fetch(1)
        "<destination type=\"#{xml_escape(target_type)}\">#{xml_element('id', issue.id, type: 'integer')}</destination>"
      end
      "<destinations type=\"array\">#{entries.join}</destinations>"
    end

    # Commands belong to their defining container but stay outside the
    # mode/value/subsystem decision hierarchy.
    def add_command_references(issue)
      commands = if %w[poris_sys poris_param].include?(issue.cosmosys_item_kind_key)
                   Array(@children[issue.id]).select { |child| child.cosmosys_item_kind_key == 'poris_cmd' }
                 else
                   []
                 end
      entries = commands.map do |command|
        "<command-ref type=\"PORISCmd\">#{xml_element('id', command.id, type: 'integer')}</command-ref>"
      end
      "<commands type=\"array\">#{entries.join}</commands>"
    end

    def add_node_attributes
      '<node-attributes type="array"/>'
    end

    def add_value_fields(issue)
      case issue.cosmosys_item_kind_key
      when 'poris_value'
        case issue.pr_value_kind
        when 'text'
          xml_element('value-formatter-id', nil, type: 'integer', nil_value: true) + xml_element('default-string', issue.pr_default_text)
        when 'float'
          xml_element('value-formatter-id', 1, type: 'integer') +
            xml_element('default-float', issue.pr_default, type: 'float') +
            xml_element('rangemin', issue.pr_min, type: 'float') +
            xml_element('rangemax', issue.pr_max, type: 'float')
        else
          xml_element('value-formatter-id', nil, type: 'integer', nil_value: true)
        end
      when 'poris_cmd'
        xml_element('value-formatter-id', nil, type: 'integer', nil_value: true)
      else
        ''
      end
    end

    def add_default_mode(tag, issue: nil)
      return '' unless %w[mode sub-system].include?(tag)

      default_mode_id = @focused_container_modes&.[](issue&.id)&.first
      xml_element('default-mode-id', default_mode_id, type: 'integer', nil_value: default_mode_id.nil?) +
        if tag == 'mode'
          default_value = destinations_for(issue).find { |target| target.cosmosys_item_kind_key == 'poris_value' }
          xml_element(
            'default-value-id',
            default_value&.id,
            type: 'integer',
            nil_value: default_value.nil?
          )
        else
          ''
        end
    end

    def destinations_for(issue)
      if @focused_container_destinations&.key?(issue.id)
        return @focused_container_destinations.fetch(issue.id).filter_map { |id| @items[id] }
      elsif @focused_mode_destinations&.key?(issue.id)
        return @focused_mode_destinations.fetch(issue.id).filter_map { |id| @items[id] }
      end

      case issue.cosmosys_item_kind_key
      when 'poris_sys', 'poris_param'
        Array(@children[issue.id]).select { |child| NODE_TYPES.key?(child.cosmosys_item_kind_key) && child.cosmosys_item_kind_key != 'poris_cmd' }
      when 'poris_mode'
        relation_ids = IssueRelation.where(issue_from_id: issue.id, relation_type: 'blocks').order(:id).pluck(:issue_to_id)
        relation_ids.filter_map { |id| @items[id] }
                    .select { |target| %w[poris_mode poris_value].include?(target.cosmosys_item_kind_key) }
                    .sort_by { |target| tree_order_key(target) }
      else
        []
      end
    end

    # Use the same sibling order as the cosmoSys tree (`csposition`, then the
    # nested-set position and ID as stable tie-breakers). PORIS form controls
    # consume these destinations in order, so modes and child containers are
    # offered consistently with the tree view and its diagrams.
    def order_by_tree_position(items)
      by_parent = items.group_by(&:parent_issue_id)
      item_ids = items.to_h { |item| [item.id, true] }
      sibling_key = ->(item) { [item.csposition.to_i, item.lft.to_i, item.id] }
      ordered = []
      visited = {}

      visit = lambda do |item|
        return if visited[item.id]

        visited[item.id] = true
        ordered << item
        Array(by_parent[item.id]).sort_by(&sibling_key).each { |child| visit.call(child) }
      end

      items.select { |item| item.parent_issue_id.blank? || !item_ids.key?(item.parent_issue_id) }
           .sort_by(&sibling_key)
           .each { |root| visit.call(root) }
      items.sort_by(&sibling_key).each { |item| visit.call(item) }
      ordered
    end

    def tree_order_key(item)
      [@tree_order_index&.fetch(item.id, nil) || Float::INFINITY, item.id]
    end

    def node_definition(issue)
      return ['value-string', 'PORISValueString', 'PORISValueString'] if issue.cosmosys_poris_value? && issue.pr_value_kind == 'text'
      return ['value-double-range', 'PORISValueFloat', 'PORISValueFloat'] if issue.cosmosys_poris_value? && issue.pr_value_kind == 'float'

      NODE_TYPES.fetch(issue.cosmosys_item_kind_key)
    end

    def xml_element(name, value, type: nil, nil_value: false)
      attributes = +''
      attributes << " type=\"#{xml_escape(type)}\"" if type
      attributes << ' nil="true"' if nil_value
      content = value.present? ? xml_escape(value) : ''
      "<#{name}#{attributes}>#{content}</#{name}>"
    end

    def xml_escape(value)
      ERB::Util.html_escape(value.to_s)
    end
  end
end
