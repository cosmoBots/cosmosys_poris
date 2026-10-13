module CosmosysPoris
  # Produces a readable Ruby constructor and a command-oriented validation
  # outline from the current PORIS project tree. This is a preview: the legacy
  # rbPORIS core does not yet implement PORISCmd.
  class RubyCodePreview
    Result = Struct.new(:constructor, :validation_commands, :validation_steps, keyword_init: true)

    KINDS = %w[poris_sys poris_param poris_mode poris_value poris_cmd].freeze
    CONTAINERS = %w[poris_sys poris_param].freeze

    def initialize(project, user: User.current, project_preview: nil)
      @project = project
      @user = user
      @project_preview = project_preview
    end

    def render
      @items = Issue.visible(@user)
                    .where(project_id: @project.self_and_descendants.select(:id))
                    .includes(:parent)
                    .to_a
                    .select(&:cosmosys_poris?)
      @items_by_id = @items.index_by(&:id)
      @children = @items.group_by(&:parent_issue_id)
      mode_ids = @items.select { |item| kind(item) == 'poris_mode' }.map(&:id)
      @targets = OptionRelations.grouped_by_mode(mode_ids).transform_values do |relations|
        relations.filter_map { |relation| @items_by_id[relation.issue_to_id] }
      end
      steps = validation_steps
      Result.new(constructor: constructor_code, validation_commands: validation_code(steps), validation_steps: steps)
    end

    # Evaluates the same structured query that validation_code renders as Ruby.
    # A nil result means that the model does not define an observable query.
    def evaluate_query(query, state)
      query = query.stringify_keys
      return nil if query['type'].start_with?('unresolved_')
      return false unless query['type'] == 'state_equals'

      expected = query.fetch('expected_state', {}).stringify_keys
      actual = Array(state).find { |row| row['node_id'].to_s == query['node_id'].to_s }
      return false unless actual

      %w[mode_id mode_name value_id value_name data].all? do |key|
        actual[key] == expected[key]
      end
    end

    private

    def constructor_code
      roots = @items.select { |item| !@items_by_id.key?(item.parent_issue_id) }.sort_by { |item| order_key(item) }
      root = roots.first
      return '# No PORIS root is visible in this project.' unless root

      objects = ordered_tree(root)
      supported_objects = objects.reject { |item| kind(item) == 'poris_cmd' }
      lines = [
        '# Generated from the current PORIS project model.',
        '# The sys... and pr... readers are stable access shortcuts.',
        '# Command registration remains a TODO until the Ruby core exposes a PORISCmd API.',
        '',
        "class #{ruby_identifier(root.subject)}PORIS < PORISDoc",
        "  attr_reader #{supported_objects.map { |item| ":#{accessor(item)}" }.join(', ')}",
        '',
        '  def initialize(project_id)',
        '    super(project_id)'
      ]

      objects.each do |item|
        if kind(item) == 'poris_cmd'
          lines << "    # TODO: register command #{item.subject.inspect} on #{item.parent&.subject.to_s.inspect}."
          next
        end
        klass, args = constructor_for(item)
        lines << "    @#{accessor(item)} = #{klass}.new(#{args})"
        lines << "    addItem(@#{accessor(item)})"
        lines << "    @#{accessor(item)}.setIdent(#{item.csid.to_s.inspect})" if item.csid.present?
      end
      lines << "    setRoot(@#{accessor(root)})"
      lines.concat(containment_lines(objects))
      lines.concat(mode_lines(objects))
      lines.concat(enablement_lines(objects))
      lines << '  end'
      lines << 'end'
      lines.join("\n")
    end

    def constructor_for(item)
      name = item.subject.to_s.inspect
      case kind(item)
      when 'poris_sys' then ['PORISSys', name]
      when 'poris_param' then ['PORISParam', name]
      when 'poris_mode' then ['PORISMode', name]
      when 'poris_value'
        case item.pr_value_kind
        when 'float' then ['PORISValueFloat', [name, item.pr_min, item.pr_default, item.pr_max].map { |value| value.nil? ? 'nil' : value.to_s }.join(', ')]
        when 'text' then ['PORISValueString', [name, item.pr_default_text.to_s.inspect].join(', ')]
        else ['PORISValue', name]
        end
      when 'poris_cmd' then ['PORISCmd', name]
      else ['PORIS', name]
      end
    end

    def containment_lines(objects)
      objects.filter_map do |item|
        parent = @items_by_id[item.parent_issue_id]
        next unless parent && CONTAINERS.include?(kind(parent))

        method = kind(item) == 'poris_param' ? 'addParam' : (kind(item) == 'poris_sys' ? 'addSubsystem' : nil)
        "    @#{accessor(parent)}.#{method}(@#{accessor(item)})" if method
      end
    end

    def mode_lines(objects)
      objects.select { |item| kind(item) == 'poris_mode' }.filter_map do |mode|
        parent = @items_by_id[mode.parent_issue_id]
        "    @#{accessor(parent)}.addMode(@#{accessor(mode)})" if parent && CONTAINERS.include?(kind(parent))
      end
    end

    def enablement_lines(objects)
      objects.select { |item| kind(item) == 'poris_mode' }.flat_map do |mode|
        Array(@targets[mode.id]).filter_map do |target|
          next unless @items_by_id.key?(target.id)

          method = kind(target) == 'poris_mode' ? 'addSubMode' : (kind(target) == 'poris_value' ? 'addValue' : nil)
          "    @#{accessor(mode)}.#{method}(@#{accessor(target)})" if method
        end
      end
    end

    def validation_steps
      @planning_runtime = RuntimeModel.new(@project, user: @user)
      project_preview = @project_preview || ProjectSpecPreview.new(@project, user: @user).render
      source_steps = project_preview.validation_steps
      source_steps.map { |step| compile_validation_step(step) }
    end

    def compile_validation_step(step)
      operation = step[:operation]
      unless operation
        reason = step[:unverified_reason] || 'This validation stimulus has no executable PORIS operation mapping yet'
        return step.merge(
          stimulus: nil,
          code: '# No executable PORIS operation mapping is defined for this step.',
          assertion_code: "raise NotImplementedError, #{reason.inspect}",
          query: { 'type' => 'unresolved_validation', 'reason' => reason },
          query_description: reason,
          query_expected: 'an executable stimulus and observable result'
        )
      end

      normalized_operation = operation.stringify_keys
      previous_state = @planning_runtime.state
      result = @planning_runtime.apply([normalized_operation])
      operation_result = result.fetch('operations').first
      observed_state = result.fetch('state')
      target_id = normalized_operation['node_id'].to_s
      expected_state = if step[:negative]
                         previous_state.find { |row| row['node_id'].to_s == target_id }
                       else
                         observed_state.find { |row| row['node_id'].to_s == target_id }
                       end
      query = if step[:unverified_reason]
                { 'type' => 'unresolved_validation', 'reason' => step[:unverified_reason] }
              else
                {
                  'type' => 'state_equals',
                  'node_id' => target_id,
                  'expected_state' => expected_state.to_h.slice('mode_id', 'mode_name', 'value_id', 'value_name', 'data')
                }
              end
      code = operation_result.fetch('call')
      code = "command_result = #{code}" if normalized_operation['type'] == 'invoke_command'
      assertion_code = if query['type'] == 'unresolved_validation'
                         "raise NotImplementedError, #{query['reason'].inspect}"
                       else
                         "raise #{"#{step[:id]} expected result query failed".inspect} unless #{ruby_query_for(query)}"
                       end
      step.merge(
        stimulus: normalized_operation,
        code: code,
        assertion_code: assertion_code,
        query: query,
        query_description: query_description(query),
        query_expected: query_expected(query)
      )
    end

    def validation_code(steps)
      lines = [
        '# Command-oriented validation outline; execute each stimulus in order.',
        '# Each expected result is a query against the observed PORIS state.',
        '# State is carried forward between steps; do not reset between steps.',
        '# Calls use the generated sys.../pr... accessors and PORIS action names.',
        ''
      ]
      steps.each do |step|
        lines << "# #{step[:id]}: #{step[:title]}"
        lines << "# Stimuli: #{step[:stimuli]}"
        lines << "# Expected result: #{step[:expected]}"
        lines << step[:code]
        lines << step[:assertion_code]
        lines << ''
      end
      lines << '# No PORIS configuration steps were generated.' if steps.empty?
      lines.join("\n")
    end

    def query_description(query)
      return query['reason'] if query['type'].start_with?('unresolved_')

      ruby_query_for(query)
    end

    def query_expected(query)
      return 'NotImplementedError' if query['type'].start_with?('unresolved_')

      'true'
    end

    def ruby_query_for(query)
      node = @items_by_id[query['node_id'].to_i]
      return 'false' unless node

      target = "object.#{accessor(node)}"
      expected = query.fetch('expected_state', {})
      mode_id = expected['mode_id'].to_s
      mode = @items_by_id[mode_id.to_i] if mode_id.match?(/\A\d+\z/)
      mode_reference = mode ? "object.#{accessor(mode)}" : "#{target}.unknownMode"
      predicates = ["#{target}.getSelectedMode == #{mode_reference}"]

      if kind(node) == 'poris_param'
        value_id = expected['value_id'].to_s
        value = @items_by_id[value_id.to_i] if value_id.match?(/\A\d+\z/)
        if value.nil?
          predicates << "#{target}.getSelectedValue.nil?"
        else
          predicates << "#{target}.getSelectedValue == object.#{accessor(value)}"
          predicates << "#{target}.getSelectedValue&.getData == #{expected['data'].inspect}" if expected.key?('data')
        end
      end
      predicates.join(' && ')
    end

    def ordered_tree(root)
      result = []
      visit = lambda do |item|
        result << item
        Array(@children[item.id]).select { |child| KINDS.include?(kind(child)) }.sort_by { |child| order_key(child) }.each { |child| visit.call(child) }
      end
      visit.call(root)
      result
    end

    def order_key(item)
      [item.csposition.to_i, item.lft.to_i, item.id]
    end

    def kind(item)
      item&.cosmosys_item_kind_key
    end

    def accessor(item)
      case kind(item)
      when 'poris_sys' then "sys#{ruby_identifier(item.subject)}"
      when 'poris_param' then "pr#{ruby_identifier(item.subject)}"
      when 'poris_mode' then "md#{ruby_identifier(@items_by_id[item.parent_issue_id]&.subject)}Mode_#{ruby_identifier(item.subject)}"
      when 'poris_value' then "vl#{ruby_identifier(@items_by_id[item.parent_issue_id]&.subject)}_#{ruby_identifier(item.subject)}"
      when 'poris_cmd' then "cmd#{ruby_identifier(@items_by_id[item.parent_issue_id]&.subject)}_#{ruby_identifier(item.subject)}"
      else "node#{item.id}"
      end
    end

    def ruby_identifier(value)
      text = value.to_s.tr('áéíóúÁÉÍÓÚñÑ', 'aeiouAEIOUnN')
      text = text.gsub('(', '_').gsub(')', '_').gsub(' ', '_').gsub('.', '_').gsub('+', 'p').gsub('/', '_')
                 .gsub(/[¿?\-]/, '_').gsub(/[^A-Za-z0-9_]/, '_')
      text = 'sequenceb' if text.downcase == 'sequence'
      text.presence || 'PORISNode'
    end
  end
end
