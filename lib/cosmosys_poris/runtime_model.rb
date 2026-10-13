module CosmosysPoris
  # A short-lived PORIS runtime built from the current project model. Its
  # mutable selections live only for the duration of a request; the session
  # stores the compact state needed to rebuild it on the next request.
  class RuntimeModel
    CONTAINER_KINDS = %w[poris_sys poris_param].freeze

    attr_reader :items

    def initialize(project, user: User.current)
      project_ids = project.self_and_descendants.pluck(:id)
      @items = Issue.visible(user).where(project_id: project_ids)
                      .includes(:parent).to_a.select(&:cosmosys_poris?)
                      .index_by(&:id)
      @children = @items.values.group_by(&:parent_issue_id)
      @modes = @items.values.select { |item| item.cosmosys_item_kind_key == 'poris_mode' }.index_by(&:id)
      @values = @items.values.select { |item| item.cosmosys_item_kind_key == 'poris_value' }.index_by(&:id)
      @relations = OptionRelations.grouped_by_mode(@modes.keys)
      @roots = ordered(@items.values.select { |item| !@items.key?(item.parent_issue_id) })
      @state = {}
      @items.values.each do |item|
        next unless CONTAINER_KINDS.include?(item.cosmosys_item_kind_key)

        @state[item.id] = { 'mode_id' => unknown_id(item.id) }
      end
      @roots.each { |root| reconcile_container(root, root: true) }
    end

    # Apply a list of explicit operations in order. Each operation is
    # {type: "set_mode"|"set_value", node_id:, mode_id/value_id:, data:}.
    def apply(operations)
      results = Array(operations).map do |operation|
        result = apply_operation(operation)
        result.merge('call' => ruby_call_for(operation))
      end
      { 'state' => state, 'operations' => results }
    end

    # Replays the committed session state root-first against a fresh model.
    def restore(saved_state)
      operations = Array(saved_state).flat_map do |row|
        node_id = row['node_id']
        entries = [{ 'type' => 'set_mode', 'node_id' => node_id, 'mode_id' => row['mode_id'], 'internal' => true }]
        if row['value_id']
          entries << { 'type' => 'set_value', 'node_id' => node_id, 'value_id' => row['value_id'], 'data' => row['data'] }
        end
        entries
      end
      apply(operations)
    end

    # Turn the viewer's complete tree snapshot into ordered setter calls. This
    # is only an adapter: the runtime applies the same individual operations
    # that a future button-based client can send directly.
    def operations_from_snapshot(snapshot, previous_state: [])
      previous = Array(previous_state).index_by { |row| row['node_id'].to_s }
      operations = []
      visit = lambda do |node|
        return unless node.is_a?(Hash)

        node_id = node['id'].to_s
        mode_id = node.dig('mode', 'id')
        old = previous[node_id]
        node_record = @items[node_id.to_i]
        implicit_child_unknown = mode_id.to_s == unknown_id(node_id) && node_record && !root?(node_record)
        if mode_id.present? && !implicit_child_unknown && old&.fetch('mode_id', nil).to_s != mode_id.to_s
          operations << {
            'type' => 'set_mode', 'node_id' => node_id, 'mode_id' => mode_id,
            'internal' => mode_id.to_s == unknown_id(node_id)
          }
        end

        value = node['value']
        if value.is_a?(Hash) && value['id'].present?
          value_id = value['id'].to_s
          data = value.key?('number') ? value['number'] : value['data']
          if old&.fetch('value_id', nil).to_s != value_id || old&.fetch('data', nil) != data
            operations << { 'type' => 'set_value', 'node_id' => node_id, 'value_id' => value_id, 'data' => data }
          end
        end
        Array(node['subsystems']).each { |child| visit.call(child) }
      end
      visit.call(snapshot)
      operations
    end

    def state
      ordered(@items.values.select { |item| CONTAINER_KINDS.include?(item.cosmosys_item_kind_key) }).map do |item|
        selected = @state[item.id] || {}
        mode = @modes[selected['mode_id'].to_i] if selected['mode_id'].to_s.match?(/\A\d+\z/)
        value = @values[selected['value_id'].to_i] if selected['value_id'].to_s.match?(/\A\d+\z/)
        {
          'node_id' => item.id,
          'name' => item.subject,
          'kind' => item.cosmosys_item_kind_key,
          'mode_id' => selected['mode_id'],
          'mode_name' => mode&.subject || 'Unknown',
          'value_id' => selected['value_id'],
          'value_name' => value&.subject,
          'data' => selected['data']
        }.compact
      end
    end

    private

    def apply_operation(operation)
      op = operation.to_h.stringify_keys
      node = @items[op['node_id'].to_i]
      return rejected(op, 'Unknown PORIS node') unless node && CONTAINER_KINDS.include?(node.cosmosys_item_kind_key)

      case op['type']
      when 'set_mode'
        set_mode(node, op['mode_id'], allow_implicit_unknown: op['internal'] == true)
      when 'set_value'
        set_value(node, op['value_id'], op['data'])
      else
        rejected(op, 'Unsupported PORIS operation')
      end
    end

    def set_mode(node, requested_id, allow_implicit_unknown: false)
      requested = requested_id.to_s
      candidates = eligible_modes(node)
      if requested == unknown_id(node.id)
        unless root?(node) || (allow_implicit_unknown && candidates.empty?)
          return rejected_for(node, 'set_mode', requested, 'Unknown is only selectable by the root; child Unknown modes are implicit')
        end

        @state[node.id] = { 'mode_id' => unknown_id(node.id) }
        reconcile_values(node)
        reconcile_children(node)
        return accepted(node, 'set_mode', requested)
      end

      mode = @modes[requested.to_i] if requested.match?(/\A\d+\z/)
      unless mode && candidates.include?(mode.id)
        return rejected_for(node, 'set_mode', requested, 'Mode is not eligible in the active parent mode')
      end

      @state[node.id] ||= {}
      @state[node.id]['mode_id'] = mode.id.to_s
      reconcile_values(node)
      reconcile_children(node)
      accepted(node, 'set_mode', requested)
    end

    def set_value(node, requested_id, data)
      mode_id = @state.dig(node.id, 'mode_id')
      mode_targets = mode_target_ids(mode_id)
      value = @values[requested_id.to_i] if requested_id.to_s.match?(/\A\d+\z/)
      unless value && mode_targets.include?(value.id)
        return rejected_for(node, 'set_value', requested_id, 'Value is not eligible in the active mode')
      end

      previous_value_id = @state.dig(node.id, 'value_id').to_s
      converted = if data.nil? && previous_value_id == value.id.to_s
                    @state.dig(node.id, 'data') || default_data(value)
                  elsif data.nil?
                    default_data(value)
                  else
                    validated_data(value, data)
                  end
      return rejected_for(node, 'set_value', requested_id, 'Value data is outside its permitted range') if converted == :invalid

      @state[node.id] ||= {}
      @state[node.id]['value_id'] = value.id.to_s
      @state[node.id]['data'] = converted
      accepted(node, 'set_value', requested_id)
    end

    def eligible_modes(node)
      own_modes = Array(@children[node.id]).select { |child| child.cosmosys_item_kind_key == 'poris_mode' }.map(&:id)
      return own_modes if root?(node)

      parent = @items[node.parent_issue_id]
      return [] unless parent

      mode_target_ids(@state.dig(parent.id, 'mode_id')) & own_modes
    end

    def reconcile_container(node, root: false)
      candidates = eligible_modes(node)
      selected_id = @state.dig(node.id, 'mode_id')
      if root && selected_id == unknown_id(node.id)
        # Root Unknown is the normal initial state, even though explicit modes
        # are available to the user.
        selected_id = unknown_id(node.id)
      elsif !selected_id.to_s.start_with?('unknown:') && !candidates.include?(selected_id.to_i)
        selected_id = nil
      elsif selected_id.to_s.start_with?('unknown:') && !candidates.empty?
        selected_id = nil
      elsif candidates.empty?
        selected_id = unknown_id(node.id)
      else
        selected_id ||= candidates.first.to_s
      end
      @state[node.id] ||= {}
      @state[node.id]['mode_id'] = selected_id.to_s
      reconcile_values(node)
      reconcile_children(node)
    end

    def reconcile_children(node)
      Array(@children[node.id]).select { |child| CONTAINER_KINDS.include?(child.cosmosys_item_kind_key) }
            .sort_by { |child| sibling_key(child) }
            .each { |child| reconcile_container(child) }
    end

    def reconcile_values(node)
      state = (@state[node.id] ||= {})
      candidates = mode_target_ids(state['mode_id']).select { |id| @values.key?(id) }
      current = state['value_id']&.to_i
      selected = candidates.include?(current) ? current : candidates.first
      unless selected
        state.delete('value_id')
        state.delete('data')
        return
      end

      value = @values[selected]
      state['value_id'] = selected.to_s
      if value.pr_value_kind == 'float'
        number = Float(state['data']) rescue nil
        min = Float(value.pr_min) rescue nil
        max = Float(value.pr_max) rescue nil
        unless number && min && max && number.between?(min, max)
          number = default_data(value)
        end
        state['data'] = number unless number.nil?
      elsif value.pr_value_kind == 'text'
        state['data'] = default_data(value) if state['data'].nil?
      end
    end

    def default_data(value)
      case value.pr_value_kind
      when 'float'
        Float(value.pr_default) rescue nil
      when 'text'
        value.pr_default_text.to_s
      end
    end

    def mode_target_ids(mode_id)
      return [] unless mode_id.to_s.match?(/\A\d+\z/)

      Array(@relations[mode_id.to_i]).map(&:issue_to_id)
    end

    def validated_data(value, data)
      case value.pr_value_kind
      when 'float'
        number = Float(data)
        min = Float(value.pr_min)
        max = Float(value.pr_max)
        number.between?(min, max) ? number : :invalid
      when 'text'
        data.to_s
      else
        nil
      end
    rescue ArgumentError, TypeError
      :invalid
    end

    def root?(node)
      !@items.key?(node.parent_issue_id)
    end

    def unknown_id(node_id)
      "unknown:#{node_id}"
    end

    def accepted(node, type, requested)
      { 'accepted' => true, 'type' => type, 'node_id' => node.id, 'requested_id' => requested }
    end

    def rejected(operation, reason)
      operation.stringify_keys.merge('accepted' => false, 'reason' => reason)
    end

    def rejected_for(node, type, requested, reason)
      { 'accepted' => false, 'type' => type, 'node_id' => node.id, 'requested_id' => requested.to_s, 'reason' => reason }
    end

    def ruby_call_for(operation)
      op = operation.to_h.stringify_keys
      node = @items[op['node_id'].to_i]
      return 'object.<invalid operation>' unless node

      target = object_path(node)
      if op['type'] == 'set_mode'
        mode_id = op['mode_id'].to_s
        mode = @modes[mode_id.to_i] if mode_id.match?(/\A\d+\z/)
        name = mode&.subject || 'Unknown'
        "#{target}.setMode(#{name.inspect})"
      elsif op['type'] == 'set_value'
        value_id = op['value_id'].to_s
        value = @values[value_id.to_i] if value_id.match?(/\A\d+\z/)
        name = value&.subject || value_id
        data = op['data']
        if value&.pr_value_kind == 'float' && !data.nil?
          "#{target}.setValue(#{name.inspect}, #{data.inspect})"
        else
          "#{target}.setValue(#{name.inspect})"
        end
      else
        'object.<unsupported operation>'
      end
    end

    def object_path(node)
      ancestors = []
      cursor = node
      while cursor
        ancestors.unshift(cursor)
        cursor = @items[cursor.parent_issue_id]
      end
      ancestors.drop(1).reduce('object') do |path, item|
        method = item.cosmosys_item_kind_key == 'poris_param' ? 'getParam' : 'getSubsystem'
        "#{path}.#{method}(#{item.subject.inspect})"
      end.then do |path|
        if root?(node)
          'object'
        else
          path
        end
      end
    end

    def sibling_key(item)
      [item.csposition.to_i, item.lft.to_i, item.id]
    end

    def ordered(items)
      by_parent = items.group_by(&:parent_issue_id)
      all_ids = items.to_h { |item| [item.id, true] }
      result = []
      visit = lambda do |item|
        result << item
        Array(by_parent[item.id]).sort_by { |child| sibling_key(child) }.each { |child| visit.call(child) }
      end
      items.select { |item| !all_ids.key?(item.parent_issue_id) }.sort_by { |item| sibling_key(item) }.each { |item| visit.call(item) }
      result
    end
  end
end
