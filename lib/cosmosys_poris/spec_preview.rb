module CosmosysPoris
  class SpecPreview
    Result = Struct.new(
      :requirements_markdown, :validation_markdown,
      :requirements_body, :validation_body, :datums,
      keyword_init: true
    )

    PORIS_KINDS = %w[poris_sys poris_param poris_mode poris_value poris_cmd].freeze
    CONTAINER_KINDS = %w[poris_sys poris_param].freeze

    def initialize(issue, user: User.current, locale_project: nil)
      @issue = issue
      @user = user
      @locale_project = locale_project || issue&.project
      @datums = {}
      @requirements = []
      @requirement_description = []
      @requirement_topic_intros = {}
      @requirement_chapter = nil
      @requirement_topic = nil
      @validations = []
      @notes = []
      @parameter_value_table = nil
    end

    def render
      return Result.new(requirements_markdown: '', validation_markdown: '', requirements_body: '', validation_body: '', datums: []) unless issue&.cosmosys_poris?

      @locale_project.with_cosmosys_locale do
        @requirement_chapter = tr('chapter.requirements')
        load_model
        generate_fragments
        requirements_body = notes_markdown + requirements_markdown
        validation_body = notes_markdown + @validations.join("\n\n")
        Result.new(
          requirements_markdown: document(datums_markdown + requirements_body),
          validation_markdown: document(datums_markdown + validation_body),
          requirements_body: requirements_body,
          validation_body: validation_body,
          datums: @datums.values
        )
      end
    end

    private

    attr_reader :issue, :user

    def load_model
      @anchor = if CONTAINER_KINDS.include?(issue.cosmosys_item_kind_key)
                  issue
                else
                  visible_parent || issue
                end
      project_ids = @anchor.project.self_and_descendants.pluck(:id)
      project_ids << @anchor.project_id
      @items = Issue.visible(user)
                    .where(project_id: project_ids.uniq)
                    .includes(:parent)
                    .to_a
                    .select(&:cosmosys_poris?)
      @items << @anchor unless @items.any? { |item| item.id == @anchor.id }
      @items << issue unless @items.any? { |item| item.id == issue.id }
      @items_by_id = @items.index_by(&:id)
      @children = @items.group_by(&:parent_issue_id)
      @block_targets = IssueRelation.where(relation_type: 'blocks', issue_from_id: @items.map(&:id))
                                    .pluck(:issue_from_id, :issue_to_id)
                                    .each_with_object(Hash.new { |hash, key| hash[key] = [] }) do |(from_id, to_id), result|
        target = @items_by_id[to_id]
        result[from_id] << target if target
      end
    end

    def visible_parent
      parent_item = issue.parent
      parent_item if parent_item&.visible?(user) && parent_item.cosmosys_poris?
    end

    def generate_fragments
      case issue.cosmosys_item_kind_key
      when 'poris_sys'
        describe_system_scope(issue)
      when 'poris_param'
        describe_parameter_scope(issue)
      when 'poris_mode'
        describe_mode_scope(issue)
      when 'poris_value'
        describe_value_scope(issue)
      when 'poris_cmd'
        describe_command(issue)
      end
      @requirements = @requirements.uniq
      @validations = @validations.uniq
    end

    def subtree(root)
      found = []
      queue = [root]
      until queue.empty?
        item = queue.shift
        next if found.any? { |entry| entry.id == item.id }

        found << item
        queue.concat(Array(@children[item.id]).select { |child| PORIS_KINDS.include?(child.cosmosys_item_kind_key) })
      end
      found.sort_by { |item| [item.csid.to_s, item.id] }
    end

    def describe_item(item)
      case item.cosmosys_item_kind_key
      when 'poris_sys' then describe_container(item, tr('noun.system'))
      when 'poris_param' then describe_parameter(item)
      when 'poris_mode' then describe_mode(item)
      when 'poris_value' then describe_value(item)
      when 'poris_cmd' then describe_command(item)
      end
    end

    def describe_container(item, noun)
      children = Array(@children[item.id]).select { |child| CONTAINER_KINDS.include?(child.cosmosys_item_kind_key) }
      missing_datum(item, 'purpose', tr('datum.system_purpose'))
      add_note(tr('note.system_purpose', noun: noun, name: name(item), datum: datum_reference(item, 'purpose')), chapter: name(item))
      children.group_by(&:cosmosys_item_kind_key).each do |kind, entries|
        child_noun = poris_noun(kind)
        child_label = tr(kind == 'poris_param' ? 'noun.parameters' : 'noun.systems')
        inventory = names(entries.sort_by { |child| [child.csid.to_s, child.id] })
        add_note(tr('note.contains_items', name: name(item), label: child_label, items: inventory), chapter: name(item))
        next unless @include_container_requirements != false

        with_requirement_chapter(tr(kind == 'poris_param' ? 'chapter.parameters' : 'chapter.systems')) do
          entries.sort_by { |child| [child.csid.to_s, child.id] }.each do |child|
            add_requirement(tr('requirement.container_offers_child', noun: noun, container: name(item), child_noun: child_noun, child: name(child)))
            add_validation(tr('validation.container_offers_child', container: name(item), child_noun: child_noun, child: name(child)))
          end
        end
      end
    end

    # A system exposes the modes of its parameter sub-systems to its parent.
    # Values below those modes are internal to the parameters and are shown
    # only when previewing a parameter (or an individual value).
    def describe_system_scope(system)
      previous_include_requirements = @include_container_requirements
      @include_container_requirements = false
      describe_container(system, tr('noun.system'))
      @include_container_requirements = previous_include_requirements
      children = Array(@children[system.id])
      parameters = children.select { |child| child.cosmosys_item_kind_key == 'poris_param' }
                           .sort_by { |parameter| [parameter.csid.to_s, parameter.id] }
      system_modes = children.select { |child| child.cosmosys_item_kind_key == 'poris_mode' }
                              .sort_by { |mode| [mode.csid.to_s, mode.id] }
      commands = children.select { |child| child.cosmosys_item_kind_key == 'poris_cmd' }
                         .sort_by { |command| [command.csid.to_s, command.id] }
      unless system_modes.empty?
        mode_names = names(system_modes)
        add_note(tr('note.system_modes', name: name(system), modes: mode_names), chapter: name(system))
      end
      unless commands.empty?
        command_noun = tr(commands.one? ? 'noun.the_command' : 'noun.the_commands')
        add_note(tr('note.system_accepts_commands', name: name(system), command_noun: command_noun, commands: names(commands)), chapter: name(system))
      end

      parameter_sentence = container_inventory_sentence(system, 'poris_param', tr('noun.parameters'))
      system_sentence = container_inventory_sentence(system, 'poris_sys', tr('noun.systems'))
      mode_sentence = system_modes.empty? ? nil : tr('phrase.modes', modes: plain_names(system_modes))
      description_parts = [parameter_sentence, system_sentence, mode_sentence].compact
      unless description_parts.empty?
        @requirement_description << tr('description.system', name: name(system), contents: description_parts.join(tr('conjunction.and')))
      end

      with_requirement_chapter(tr('chapter.parameters')) do
        parameters.each do |parameter|
          add_requirement(tr('requirement.system_offers_parameter', system: name(system), parameter: name(parameter)))
          add_validation(tr('validation.system_offers_parameter', system: name(system), parameter: name(parameter)))
        end

        parameters.each do |parameter|
          consumed_modes = modes_consumed_by(system_modes, parameter)
          next if consumed_modes.empty?

          topic = tr('topic.parameter_required_modes', parameter: name(parameter))
          intro = tr('intro.parameter_required_modes', parameter: name(parameter), modes: plain_names(consumed_modes), system: name(system))
          with_requirement_topic(topic, intro: intro) do
            consumed_modes.each do |mode|
              add_requirement(tr('requirement.parameter_offers_mode', parameter: name(parameter), mode: name(mode)))
              add_validation(tr('validation.parameter_offers_mode', parameter: name(parameter), mode: name(mode)))
            end
          end
        end
      end

      parameters.each { |parameter| describe_parameter_interface(parameter, include_modes: false) }

      with_requirement_chapter(tr('chapter.operating_modes')) do
        system_modes.each do |mode|
          with_requirement_topic(name(mode)) do
            describe_mode_header(mode)
            describe_mode(mode, target_kinds: %w[poris_mode], offer_requirement: false)
          end
        end
      end

      children.select { |child| child.cosmosys_item_kind_key == 'poris_sys' }
              .sort_by { |subsystem| [subsystem.csid.to_s, subsystem.id] }
              .each { |subsystem| describe_system_scope(subsystem) }

      commands.each { |command| describe_command(command) }
    end

    def describe_parameter_interface(parameter, include_modes: true)
      missing_datum(parameter, 'purpose', tr('datum.parameter_purpose'))
      add_note(tr('note.parameter_establishes', parameter: name(parameter), parent: parent_qualifier(parameter), datum: datum_reference(parameter, 'purpose')), chapter: name(parameter))
      return unless include_modes

      Array(@children[parameter.id])
        .select { |child| child.cosmosys_item_kind_key == 'poris_mode' }
        .sort_by { |mode| [mode.csid.to_s, mode.id] }
        .each { |mode| describe_mode_header(mode) }
    end

    def describe_parameter_scope(parameter)
      modes = Array(@children[parameter.id])
              .select { |child| child.cosmosys_item_kind_key == 'poris_mode' }
              .sort_by { |mode| [mode.csid.to_s, mode.id] }
      values = Array(@children[parameter.id])
               .select { |child| child.cosmosys_item_kind_key == 'poris_value' }
               .sort_by { |value| [value.csid.to_s, value.id] }

      describe_parameter_interface(parameter, include_modes: false)
      unless modes.empty?
        add_note(tr('note.parameter_modes', parameter: name(parameter), modes: names(modes)), chapter: name(parameter))
      end
      unless values.empty?
        add_note(tr('note.parameter_values', parameter: name(parameter), values: names(values)), chapter: name(parameter))
      end
      @parameter_value_table = enumerated_value_table(values)
      modes.each { |mode| describe_mode_header(mode, offer_requirement: false) }

      with_requirement_chapter(tr('chapter.operating_modes')) do
        modes.each { |mode| describe_mode_header(mode) }
      end

      with_requirement_chapter(tr('chapter.values')) do
        values.each { |value| describe_value(value) }
      end

      with_requirement_chapter(tr('chapter.mode_effects')) do
        modes.each do |mode|
          with_requirement_topic(name(mode)) do
            describe_mode(mode, offer_requirement: false)
          end
        end
      end
    end

    def describe_parameter(item)
      modes = Array(@children[item.id]).select { |child| child.cosmosys_item_kind_key == 'poris_mode' }
      values = Array(@children[item.id]).select { |child| child.cosmosys_item_kind_key == 'poris_value' }
      missing_datum(item, 'purpose', tr('datum.parameter_purpose'))
      mode_description = modes.empty? ? tr('phrase.no_modes') : tr('phrase.modes', modes: names(modes))
      value_description = values.empty? ? tr('phrase.no_values') : tr('phrase.values', values: names(values))
      add_note(tr('note.parameter_establishes', parameter: name(item), parent: parent_qualifier(item), datum: datum_reference(item, 'purpose')), chapter: name(item))
      add_requirement(tr('requirement.parameter_modes_and_values', parameter: name(item), modes: mode_description, values: value_description))
      add_validation(tr('validation.parameter_modes_and_values', parameter: name(item), modes: mode_description))
    end

    def describe_mode(item, target_kinds: nil, offer_requirement: true)
      container = @items_by_id[item.parent_issue_id]
      targets = Array(@block_targets[item.id])
      targets = targets.select { |target| target_kinds.include?(target.cosmosys_item_kind_key) } if target_kinds
      describe_mode_header(item, container: container, offer_requirement: offer_requirement)
      targets.each do |target|
        case target.cosmosys_item_kind_key
        when 'poris_param'
          add_requirement(tr('requirement.mode_enables_parameter', mode: name(item), parameter: name(target)))
          add_validation(tr('validation.mode_enables_parameter', mode: name(item), parameter: name(target)))
          subtree(target).drop(1).each { |descendant| describe_item(descendant) }
          describe_parameter(target)
        when 'poris_mode'
          target_container = @items_by_id[target.parent_issue_id]
          next unless target_container && CONTAINER_KINDS.include?(target_container.cosmosys_item_kind_key)

          if target_container.cosmosys_item_kind_key == 'poris_param' && container&.cosmosys_item_kind_key == 'poris_sys'
            add_requirement(tr('requirement.system_mode_selects_parameter_mode', system: name(container), mode: name(item), parameter: name(target_container), parameter_mode: name(target)))
            add_validation(tr('validation.system_mode_selects_parameter_mode', mode: name(item), system: name(container), parameter: name(target_container), parameter_mode: name(target)))
          else
            context = container ? tr('phrase.container', noun: poris_noun(container.cosmosys_item_kind_key), name: name(container)) : tr('noun.poris_system')
            target_noun = poris_noun(target_container.cosmosys_item_kind_key)
            add_requirement(tr('requirement.container_mode_selects_child_mode', context: context, mode: name(item), noun: target_noun, child: name(target_container), child_mode: name(target)))
            add_validation(tr('validation.container_mode_selects_child_mode', mode: name(item), noun: target_noun, child: name(target_container), child_mode: name(target)))
          end
        when 'poris_value'
          parameter = @items_by_id[target.parent_issue_id]
          if parameter
            mode_context = mode_context_for(item, container)
            if target.pr_value_kind == 'float'
              describe_active_float_value(target, parameter, mode_context)
            else
              add_requirement(tr('requirement.mode_enables_value', context: mode_context, value: name(target), parameter: name(parameter)))
            end
          end
          add_validation(tr('validation.mode_enables_value', mode: name(item), value: name(target), parameter: name(parameter))) if parameter
        end
      end
    end

    def describe_mode_header(item, container: @items_by_id[item.parent_issue_id], offer_requirement: true)
      missing_datum(item, 'purpose', tr('datum.mode_purpose'))
      add_note(tr('note.mode_purpose', mode: name(item), parent: parent_qualifier(item), datum: datum_reference(item, 'purpose')), chapter: name(item))
      return unless container && CONTAINER_KINDS.include?(container.cosmosys_item_kind_key)

      noun = poris_noun(container.cosmosys_item_kind_key)
      add_requirement(tr('requirement.container_offers_mode', noun: noun, container: name(container), mode: name(item))) if offer_requirement
      add_validation(tr('validation.container_offers_mode', noun: noun, container: name(container), mode: name(item)))
    end

    def describe_mode_scope(item)
      describe_mode(item)
    end

    def describe_value(item, include_availability: true)
      parameter = @items_by_id[item.parent_issue_id]
      related_modes = @items.select do |candidate|
        candidate.cosmosys_item_kind_key == 'poris_mode' && Array(@block_targets[candidate.id]).any? { |target| target.id == item.id }
      end
      if parameter
        if include_availability
          if item.pr_value_kind == 'enum'
            add_requirement(tr('requirement.enum_available', value: name(item), parameter: name(parameter)))
          else
            add_requirement(tr('requirement.value_admitted_by_modes', parameter: name(parameter), value: name(item), modes: names(related_modes)))
          end
          add_validation(tr('validation.value_admitted_by_modes', modes: names(related_modes), value: name(item), parameter: name(parameter)))
        end
      else
        add_requirement(tr('requirement.model_declares_value', value: name(item)))
        add_validation(tr('validation.model_declares_value', value: name(item)))
      end
      add_value_uncertainties(item)
    end

    def describe_value_scope(item)
      describe_value(item)
    end

    def mode_context_for(mode, container)
      if container&.cosmosys_item_kind_key == 'poris_sys'
        tr('phrase.system_in_mode', system: name(container), mode: name(mode))
      else
        tr('phrase.parameter_in_mode', parameter: name(container), mode: name(mode))
      end
    end

    def describe_active_float_value(value, parameter, mode_context)
      missing_datum(value, 'unit', tr('datum.range_unit'))
      missing_datum(value, 'resolution', tr('datum.range_resolution'))
      missing_datum(value, 'bounds_inclusivity', tr('datum.bounds_inclusivity'))
      missing_datum(value, 'tolerance', tr('datum.range_tolerance'))
      missing_datum(value, 'minimum', tr('datum.range_minimum')) if value.pr_min.nil?
      missing_datum(value, 'maximum', tr('datum.range_maximum')) if value.pr_max.nil?
      missing_datum(value, 'default', tr('datum.range_default')) if value.pr_default.nil?

      minimum = value.pr_min || datum_reference(value, 'minimum')
      maximum = value.pr_max || datum_reference(value, 'maximum')
      default = value.pr_default || datum_reference(value, 'default')
      range = "[#{minimum}…#{maximum}]"
      add_requirement(tr('requirement.active_float_range', context: mode_context, range: range, unit: datum_reference(value, 'unit'), resolution: datum_reference(value, 'resolution')))
      add_requirement(tr('requirement.active_float_default', context: mode_context, range: range, value_default: default))
      add_validation(tr(
        'validation.active_float_range',
        value: name(value), parameter: name(parameter), range: range,
        minimum: minimum, maximum: maximum,
        resolution: datum_reference(value, 'resolution'),
        inclusivity: datum_reference(value, 'bounds_inclusivity'),
        tolerance: datum_reference(value, 'tolerance'), value_default: default
      ))
    end

    def add_value_uncertainties(item)
      case item.pr_value_kind
      when 'float'
        missing_datum(item, 'meaning', tr('datum.range_meaning'))
        add_note(tr('note.range_meaning', name: name(item), datum: datum_reference(item, 'meaning')), chapter: name(item))
        missing_datum(item, 'unit', tr('datum.range_unit'))
        missing_datum(item, 'resolution', tr('datum.range_resolution'))
        missing_datum(item, 'bounds_inclusivity', tr('datum.bounds_inclusivity'))
        missing_datum(item, 'minimum', tr('datum.range_minimum')) if item.pr_min.nil?
        missing_datum(item, 'maximum', tr('datum.range_maximum')) if item.pr_max.nil?
        missing_datum(item, 'default', tr('datum.range_default')) if item.pr_default.nil?
        missing_datum(item, 'tolerance', tr('datum.range_tolerance'))
        minimum = item.pr_min || datum_reference(item, 'minimum')
        maximum = item.pr_max || datum_reference(item, 'maximum')
        default = item.pr_default || datum_reference(item, 'default')
        range = [minimum, maximum].join('…')
        add_requirement(tr('requirement.float_range_definition', name: name(item), range: range, unit: datum_reference(item, 'unit'), resolution: datum_reference(item, 'resolution'), value_default: default))
        add_validation(tr(
          'validation.float_range_boundaries',
          value: name(item), value_default: default, range: range,
          minimum: minimum, maximum: maximum,
          unit: datum_reference(item, 'unit'), resolution: datum_reference(item, 'resolution'),
          inclusivity: datum_reference(item, 'bounds_inclusivity'), tolerance: datum_reference(item, 'tolerance')
        ))
      when 'text'
        missing_datum(item, 'meaning', tr('datum.text_meaning'))
        add_note(tr('note.text_meaning', name: name(item), datum: datum_reference(item, 'meaning')), chapter: name(item))
        missing_datum(item, 'constraints', tr('datum.text_constraints'))
        missing_datum(item, 'default', tr('datum.text_default')) if item.pr_default_text.blank?
        add_requirement(tr('requirement.text_constraints', name: name(item), constraints: datum_reference(item, 'constraints')))
        add_validation(tr('validation.text_constraints', constraints: datum_reference(item, 'constraints')))
      else
        missing_datum(item, 'meaning', tr('datum.enum_meaning'))
        missing_datum(item, 'default', tr('datum.enum_default'))
        add_validation(tr('validation.enum_default', name: name(item), value_default: datum_reference(item, 'default')))
      end
    end

    def describe_command(item)
      container = @items_by_id[item.parent_issue_id]
      missing_datum(item, 'purpose', tr('datum.command_purpose'))
      missing_datum(item, 'effect', tr('datum.command_effect'))
      if container
        noun = poris_noun(container.cosmosys_item_kind_key)
        with_requirement_chapter(tr('chapter.commands')) do
          add_requirement(tr('requirement.command_accepted', noun: noun, container: name(container), command: name(item)))
          add_requirement(tr('requirement.command_effect', command: name(item), container: name(container), effect: datum_reference(item, 'effect')))
        end
        add_validation(tr('validation.command_accepted', noun: noun, container: name(container), command: name(item)))
        add_validation(tr('validation.command_effect', command: name(item), container: name(container), effect: datum_reference(item, 'effect')))
      else
        with_requirement_chapter(tr('chapter.commands')) do
          add_requirement(tr('requirement.model_command_accepted', command: name(item)))
          add_requirement(tr('requirement.model_command_effect', command: name(item), effect: datum_reference(item, 'effect')))
        end
        add_validation(tr('validation.model_command_accepted', command: name(item)))
        add_validation(tr('validation.model_command_effect', command: name(item), effect: datum_reference(item, 'effect')))
      end
    end

    def missing_datum(item, property, description)
      key = datum_key(item, property)
      @datums[key] ||= {
        key: key,
        description: datum_description(item, property, description),
        source_csid: item.csid,
        source_subject: item.subject,
        property: property
      }
    end

    def datum_description(item, property, description)
      noun = datum_item_noun(item)
      item_name = "**#{name(item)}**"
      return tr('datum.purpose_of', noun: noun, name: item_name) if property == 'purpose'
      return tr('datum.range_tolerance_of', name: item_name) if item.cosmosys_item_kind_key == 'poris_value' && item.pr_value_kind == 'float' && property == 'tolerance'
      return tr('datum.text_default_of', name: item_name) if item.cosmosys_item_kind_key == 'poris_value' && item.pr_value_kind == 'text' && property == 'default'
      if item.cosmosys_item_kind_key == 'poris_value' && property == 'meaning'
        return tr('datum.meaning_of_enum', name: item_name) if item.pr_value_kind == 'enum'

        meaning_subject = item.pr_value_kind == 'float' ? tr('noun.value_range') : tr('noun.text_value')
        return tr('datum.meaning_of', subject: meaning_subject, name: item_name)
      end
      return tr('datum.enum_default_of', name: item_name) if item.cosmosys_item_kind_key == 'poris_value' && item.pr_value_kind == 'enum' && property == 'default'
      return tr('datum.command_effect_of', name: item_name) if item.cosmosys_item_kind_key == 'poris_cmd' && property == 'effect'

      tr('datum.generic', description: description, noun: noun, name: item_name)
    end

    def datum_item_noun(item)
      case item.cosmosys_item_kind_key
      when 'poris_sys' then tr('noun.system')
      when 'poris_param' then tr('noun.parameter')
      when 'poris_mode' then tr('noun.mode')
      when 'poris_value'
        case item.pr_value_kind
        when 'float' then tr('noun.numeric_value')
        when 'text' then tr('noun.text_value')
        else tr('noun.enumerated_value')
        end
      when 'poris_cmd' then tr('noun.command')
      else tr('noun.poris_item')
      end
    end

    def datum_key(item, property)
      source_key = item.csid.presence || "POR_#{item.id}"
      normalized_source = source_key.gsub(/[^A-Za-z0-9]+/, '_').gsub(/\A_+|_+\z/, '')
      "#{normalized_source}_#{property}"
    end

    def datum_reference(item, property)
      "${#{datum_key(item, property)}.value}"
    end

    def datums_markdown
      return tr('shared_datums.empty') if @datums.empty?

      entries = @datums.values.sort_by { |datum| datum[:key] }.map do |datum|
        tr('shared_datums.entry', key: datum[:key], description: datum[:description])
      end
      tr('shared_datums.list', entries: entries.join("\n"))
    end

    def enumerated_value_table(values)
      enumerated_values = values.select { |value| value.pr_value_kind == 'enum' }
      return if enumerated_values.empty?

      rows = enumerated_values.map do |value|
        missing_datum(value, 'meaning', tr('datum.enum_meaning'))
        missing_datum(value, 'default', tr('datum.enum_default'))
        "| **#{name(value)}** | #{datum_reference(value, 'meaning')} | #{datum_reference(value, 'default')} |"
      end
      ([tr('enum_table.header'), '| --- | --- | --- |'] + rows).join("\n")
    end

    def add_note(text, chapter:)
      @notes << { chapter: chapter, text: text }
    end

    def notes_markdown
      return '' if @notes.empty?

      if issue.cosmosys_item_kind_key == 'poris_sys'
        heading = tr('heading.system_information', name: name(issue))
        entries = @notes.uniq.map { |note| "- #{note[:text]}" }.join("\n")
        return tr('section.body', content: [heading, entries].join("\n\n"))
      end

      if issue.cosmosys_item_kind_key == 'poris_param'
        heading = tr('heading.parameter_information', name: name(issue))
        entries = @notes.uniq.map { |note| "- #{note[:text]}" }.join("\n")
        content = [heading, entries, @parameter_value_table].compact_blank.join("\n\n")
        return tr('section.body', content: content)
      end

      chapters = @notes.uniq.group_by { |note| note[:chapter] }
      content = chapters.map do |chapter, notes|
        entries = notes.map { |note| "- #{note[:text]}" }.join("\n")
        if issue.cosmosys_item_kind_key == 'poris_sys' && chapter == name(issue)
          entries
        else
          tr('section.chapter', chapter: chapter, entries: entries)
        end
      end
      heading = issue.cosmosys_item_kind_key == 'poris_sys' ? tr('heading.system_information', name: name(issue)) : tr('heading.model_information')
      tr('section.body', content: [heading, content.join("\n\n")].join("\n\n"))
    end

    def add_requirement(text)
      @requirements << {
        chapter: @requirement_chapter,
        topic: @requirement_topic,
        text: text
      }
    end

    def requirements_markdown
      sections = @requirement_description.dup
      requirement_id = 0
      @requirements.group_by { |requirement| requirement[:chapter] }.each do |chapter, entries|
        content = [tr('heading.level_two', title: chapter)]
        active_topic = nil
        entries.each do |requirement|
          if requirement[:topic] != active_topic
            active_topic = requirement[:topic]
            if active_topic.present?
              content << tr('heading.level_three', title: active_topic)
              intro = @requirement_topic_intros[[chapter, active_topic]]
              content << intro if intro.present?
            end
          end
          requirement_id += 1
          content << tr('requirement.numbered', id: format('R-%04d', requirement_id), text: requirement[:text])
        end
        sections << content.join("\n\n")
      end
      sections.join(tr('section.divider'))
    end

    def with_requirement_chapter(chapter)
      previous = @requirement_chapter
      @requirement_chapter = chapter
      yield
    ensure
      @requirement_chapter = previous
    end

    def with_requirement_topic(topic, intro: nil)
      previous = @requirement_topic
      @requirement_topic = topic
      @requirement_topic_intros[[@requirement_chapter, topic]] ||= intro if intro
      yield
    ensure
      @requirement_topic = previous
    end

    def container_inventory_sentence(container, kind, label)
      entries = Array(@children[container.id]).select { |child| child.cosmosys_item_kind_key == kind }
      return if entries.empty?

      tr('phrase.the_items', label: label, items: plain_names(entries.sort_by { |child| [child.csid.to_s, child.id] }))
    end

    def modes_consumed_by(system_modes, parameter)
      targets = system_modes.flat_map { |system_mode| Array(@block_targets[system_mode.id]) }
      targets.select do |target|
        target.cosmosys_item_kind_key == 'poris_mode' && target.parent_issue_id == parameter.id
      end.uniq { |mode| mode.id }.sort_by { |mode| [mode.csid.to_s, mode.id] }
    end

    def plain_names(items)
      items.map { |item| name(item) }.uniq.join(', ')
    end

    def parent_qualifier(item)
      parent = @items_by_id[item.parent_issue_id]
      tr('phrase.parent_qualifier', name: name(parent)) if parent
    end

    def add_validation(text)
      @validations << tr('validation.numbered', id: format('V-%04d', @validations.length + 1), text: text)
    end

    def document(content)
      content.presence || tr('empty_preview')
    end

    def names(items)
      values = items.map { |item| "**#{name(item)}**" }.uniq
      values.empty? ? tr('phrase.none') : values.join(tr('phrase.list_separator'))
    end

    def poris_noun(kind)
      tr(kind == 'poris_sys' ? 'noun.system' : 'noun.parameter')
    end

    def tr(key, **options)
      I18n.t("cosmosys_poris.spec_preview.#{key}", **options)
    end

    def name(item)
      item&.subject.to_s.gsub(/[\\`*_{}\[\]()#+.!|>~-]/) { |character| "\\#{character}" }
    end
  end
end
