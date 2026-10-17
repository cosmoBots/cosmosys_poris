require 'set'

module CosmosysPoris
  # PORIS-specific selection layered on cosmoSys' generic in-memory audience
  # selector. The generic selector defines the visible project universe; this
  # class applies PORIS decision-tree rules (activated modes/values/commands).
  # XML generation consumes the selected items and does not make scope choices.
  class ModelSelector
    Label = Struct.new(:label, :scope_key, keyword_init: true)
    Item = Struct.new(
      :id, :parent_issue_id, :subject, :project_id, :pr_src_label, :csid,
      :kind_key, :labels, :value_kind, :default_text, :default, :min, :max,
      keyword_init: true
    ) do
      def cosmosys_item_kind_key = kind_key
      def cosmosys_poris_value? = kind_key == 'poris_value'
      def pr_value_kind = value_kind
      def pr_default_text = default_text
      def pr_default = self.default
      def pr_min = self.min
      def pr_max = self.max
      def cosmosys_poris_labels = labels
    end

    Project = Struct.new(:id, :name, :identifier, keyword_init: true)
    Result = Struct.new(
      :items, :project, :option_destination_ids,
      :focused_container_destinations,
      :focused_container_modes, :focused_mode_destinations, keyword_init: true
    )

    def initialize(project, user: User.current, scope: 'project', issue: nil)
      @project = project
      @user = user
      @scope = %w[node project node_down].include?(scope.to_s) ? scope.to_s : 'project'
      @issue = issue
    end

    def select
      candidates = visible_candidate_items
      selected = select_scoped_items(candidates)
      option_destinations = option_destination_ids(selected)
      Result.new(
        items: order_by_tree_position(selected).map { |item| model_item(item) },
        project: Project.new(id: @project.id, name: @project.name.to_s, identifier: @project.identifier.to_s),
        option_destination_ids: option_destinations,
        focused_container_destinations: @focused_container_destinations || {},
        focused_container_modes: @focused_container_modes || {},
        focused_mode_destinations: @focused_mode_destinations || {}
      )
    end

    private

    def visible_candidate_items
      focus_project = if @scope == 'node_down'
                        scope_anchor&.project || @project
                      else
                        @project
                      end
      generic_scope = @scope == 'node' ? :project_and_ancestors : :project_and_descendants
      selection = Cosmosys::ViewAudienceSelector.for_project(
        focus_project, scope: generic_scope, user: @user,
        relation_types: OptionRelations::ENABLEMENT_TYPES
      )
      candidate_project_ids = if @scope == 'node'
                                ([@project.id] + focused_ancestor_project_ids).to_set
                              else
                                selection.projects.map(&:id).to_set
                              end
      @selected_relations = selection.relations + selection.boundary_relations
      candidates = selection.audience_items.select do |item|
        candidate_project_ids.include?(item.project_id) && item.cosmosys_poris?
      end
      ActiveRecord::Associations::Preloader.new(
        records: candidates,
        associations: { cosmosys_poris_labels: :label_scope }
      ).call
      order_by_tree_position(candidates)
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

    def select_focused_items(candidates)
      @candidate_items_by_id = candidates.index_by(&:id)
      @candidate_children = candidates.group_by(&:parent_issue_id)
      mode_ids = candidates.select { |item| item.cosmosys_item_kind_key == 'poris_mode' }.map(&:id)
      @option_relations_by_mode = OptionRelations.grouped_by_mode(mode_ids, relations: @selected_relations)
      @option_target_ids = @option_relations_by_mode.transform_values { |relations| relations.map(&:issue_to_id) }
      @focused_items = {}
      @focused_container_destinations = {}
      @focused_container_modes = {}
      @focused_mode_destinations = {}

      container = @candidate_items_by_id[@issue.parent_issue_id]
      return [] unless container&.cosmosys_poris? && %w[poris_sys poris_param].include?(container.cosmosys_item_kind_key)

      if @issue.cosmosys_item_kind_key == 'poris_mode'
        include_focused_container_modes(container, [@issue], {})
      else
        include_focused_value(container, @issue)
      end
      @focused_items.values
    end

    def include_focused_container_modes(container, modes, visiting)
      modes = modes.reject do |mode|
        key = [container.id, mode.id]
        already_visited = visiting[key]
        visiting[key] = true
        already_visited
      end
      return if modes.empty?

      @focused_items[container.id] = container
      add_focused_container_commands(container)
      @focused_container_modes[container.id] = modes.map(&:id)
      child_modes_by_container = Hash.new { |hash, key| hash[key] = [] }
      modes.each do |mode|
        @focused_items[mode.id] = mode
        targets = focused_block_targets(mode)
        @focused_mode_destinations[mode.id] = targets.map(&:id)
        targets.each do |target|
          @focused_items[target.id] = target
          next unless target.cosmosys_item_kind_key == 'poris_mode'

          child_container = @candidate_items_by_id[target.parent_issue_id]
          next unless child_container&.cosmosys_poris? &&
                      %w[poris_sys poris_param].include?(child_container.cosmosys_item_kind_key) &&
                      child_container.parent_issue_id == container.id

          child_modes_by_container[child_container.id] << target
        end
      end
      @focused_container_destinations[container.id] = [*modes.map(&:id), *child_modes_by_container.keys].uniq
      child_modes_by_container.each do |container_id, child_modes|
        include_focused_container_modes(@candidate_items_by_id.fetch(container_id), child_modes, visiting)
      end
    end

    def include_focused_value(container, value)
      @focused_items[container.id] = container
      @focused_items[value.id] = value
      add_focused_container_commands(container)
      activating_modes = Array(@candidate_children[container.id]).select do |child|
        child.cosmosys_item_kind_key == 'poris_mode' && Array(@option_target_ids[child.id]).include?(value.id)
      end
      @focused_container_modes[container.id] = activating_modes.map(&:id)
      @focused_container_destinations[container.id] = activating_modes.map(&:id)
      activating_modes.each do |mode|
        @focused_items[mode.id] = mode
        @focused_mode_destinations[mode.id] = [value.id]
      end
    end

    def focused_block_targets(mode)
      Array(@option_target_ids[mode.id]).filter_map { |id| @candidate_items_by_id[id] }
        .select { |target| %w[poris_mode poris_value].include?(target.cosmosys_item_kind_key) }
    end

    def add_focused_container_commands(container)
      Array(@candidate_children[container.id]).each do |child|
        @focused_items[child.id] = child if child.cosmosys_item_kind_key == 'poris_cmd'
      end
    end

    def option_destination_ids(items)
      mode_ids = items.select { |item| item.cosmosys_item_kind_key == 'poris_mode' }.map(&:id)
      OptionRelations.grouped_by_mode(mode_ids, relations: @selected_relations).transform_values do |relations|
        relations.map(&:issue_to_id)
      end
    end

    def model_item(issue)
      labels = issue.cosmosys_poris_labels.to_a.map do |item_label|
        Label.new(label: item_label.label.to_s, scope_key: item_label.label_scope&.key.to_s)
      end
      Item.new(
        id: issue.id,
        parent_issue_id: issue.parent_issue_id,
        subject: issue.subject.to_s,
        project_id: issue.project_id,
        pr_src_label: issue.pr_src_label,
        csid: issue.csid,
        kind_key: issue.cosmosys_item_kind_key.to_s,
        labels: labels,
        value_kind: issue.pr_value_kind,
        default_text: issue.pr_default_text,
        default: issue.pr_default,
        min: issue.pr_min,
        max: issue.pr_max
      )
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
           .sort_by(&sibling_key).each { |root| visit.call(root) }
      items.sort_by(&sibling_key).each { |item| visit.call(item) }
      ordered
    end
  end
end
