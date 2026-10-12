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
      Issue.visible(@user)
           .where(project_id: project_ids)
           .includes(:parent, cosmosys_poris_labels: :label_scope)
           .to_a
           .select(&:cosmosys_poris?)
    end

    def scoped_project_ids
      case @scope
      when 'node'
        [@project.id]
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
      selected.values
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

      xml_element('default-mode-id', nil, type: 'integer', nil_value: true) +
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
      case issue.cosmosys_item_kind_key
      when 'poris_sys', 'poris_param'
        Array(@children[issue.id]).select { |child| NODE_TYPES.key?(child.cosmosys_item_kind_key) && child.cosmosys_item_kind_key != 'poris_cmd' }
      when 'poris_mode'
        relation_ids = IssueRelation.where(issue_from_id: issue.id, relation_type: 'blocks').order(:id).pluck(:issue_to_id)
        relation_ids.filter_map { |id| @items[id] }.select { |target| %w[poris_mode poris_value].include?(target.cosmosys_item_kind_key) }
      else
        []
      end
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
