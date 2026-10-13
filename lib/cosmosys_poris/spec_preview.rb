module CosmosysPoris
  class SpecPreview
    Result = Struct.new(:requirements_markdown, :validation_markdown, keyword_init: true)

    PORIS_KINDS = %w[poris_sys poris_param poris_mode poris_value poris_cmd].freeze
    CONTAINER_KINDS = %w[poris_sys poris_param].freeze

    def initialize(issue, user: User.current)
      @issue = issue
      @user = user
      @datums = {}
      @requirements = []
      @requirement_description = []
      @requirement_topic_intros = {}
      @requirement_chapter = 'Requisitos'
      @requirement_topic = nil
      @validations = []
      @notes = []
    end

    def render
      return Result.new(requirements_markdown: '', validation_markdown: '') unless issue&.cosmosys_poris?

      load_model
      generate_fragments
      Result.new(
        requirements_markdown: document(datums_markdown + notes_markdown + requirements_markdown),
        validation_markdown: document(datums_markdown + notes_markdown + @validations.join("\n\n"))
      )
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
        subtree(issue).each { |item| describe_item(item) }
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
      when 'poris_sys' then describe_container(item, 'sistema')
      when 'poris_param' then describe_parameter(item)
      when 'poris_mode' then describe_mode(item)
      when 'poris_value' then describe_value(item)
      when 'poris_cmd' then describe_command(item)
      end
    end

    def describe_container(item, noun)
      children = Array(@children[item.id]).select { |child| CONTAINER_KINDS.include?(child.cosmosys_item_kind_key) }
      missing_datum(item, 'purpose', 'Propósito o función del sistema PORIS')
      add_note("El propósito del #{noun} **#{name(item)}** es #{datum_reference(item, 'purpose')}.", chapter: name(item))
      children.group_by(&:cosmosys_item_kind_key).each do |kind, entries|
        child_noun = poris_noun(kind)
        child_label = kind == 'poris_param' ? 'parámetros' : 'sistemas'
        inventory = names(entries.sort_by { |child| [child.csid.to_s, child.id] })
        add_note("#{name(item)} contiene los #{child_label} #{inventory}.", chapter: name(item))
        next unless @include_container_requirements != false

        with_requirement_chapter(child_label.capitalize) do
          entries.sort_by { |child| [child.csid.to_s, child.id] }.each do |child|
            add_requirement("El #{noun} **#{name(item)}** debe ofrecer el #{child_noun} **#{name(child)}**.")
            add_validation("Comprobar que #{name(item)} ofrece el #{child_noun} #{name(child)}.")
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
      describe_container(system, 'sistema')
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
        add_note("#{name(system)} contiene los modos #{mode_names}.", chapter: name(system))
      end
      unless commands.empty?
        command_noun = commands.one? ? 'el comando' : 'los comandos'
        add_note("#{name(system)} acepta #{command_noun} #{names(commands)}.", chapter: name(system))
      end

      parameter_sentence = container_inventory_sentence(system, 'poris_param', 'parámetros')
      system_sentence = container_inventory_sentence(system, 'poris_sys', 'sistemas')
      mode_sentence = system_modes.empty? ? nil : "los modos #{plain_names(system_modes)}"
      description_parts = [parameter_sentence, system_sentence, mode_sentence].compact
      unless description_parts.empty?
        @requirement_description << "## Descripción de #{name(system)}\n\n#{name(system)} contiene #{description_parts.join(' y ')}."
      end

      with_requirement_chapter('Parámetros') do
        parameters.each do |parameter|
          add_requirement("El sistema **#{name(system)}** debe ofrecer el parámetro **#{name(parameter)}**.")
          add_validation("Comprobar que #{name(system)} ofrece el parámetro #{name(parameter)}.")
        end

        parameters.each do |parameter|
          consumed_modes = modes_consumed_by(system_modes, parameter)
          next if consumed_modes.empty?

          topic = "Modos necesarios del parámetro #{name(parameter)}"
          intro = "#{name(parameter)} debe ofrecer los modos #{plain_names(consumed_modes)} que consume #{name(system)}."
          with_requirement_topic(topic, intro: intro) do
            consumed_modes.each do |mode|
              add_requirement("El parámetro **#{name(parameter)}** debe ofrecer el modo **#{name(mode)}**.")
              add_validation("Comprobar que el parámetro #{name(parameter)} ofrece el modo #{name(mode)}.")
            end
          end
        end
      end

      parameters.each { |parameter| describe_parameter_interface(parameter, include_modes: false) }

      with_requirement_chapter('Modos de funcionamiento') do
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
      missing_datum(parameter, 'purpose', 'Significado funcional del parámetro')
      add_note("El parámetro **#{name(parameter)}**#{parent_qualifier(parameter)} establece #{datum_reference(parameter, 'purpose')}.", chapter: name(parameter))
      return unless include_modes

      Array(@children[parameter.id])
        .select { |child| child.cosmosys_item_kind_key == 'poris_mode' }
        .sort_by { |mode| [mode.csid.to_s, mode.id] }
        .each { |mode| describe_mode_header(mode) }
    end

    def describe_parameter(item)
      modes = Array(@children[item.id]).select { |child| child.cosmosys_item_kind_key == 'poris_mode' }
      values = Array(@children[item.id]).select { |child| child.cosmosys_item_kind_key == 'poris_value' }
      missing_datum(item, 'purpose', 'Significado funcional del parámetro')
      mode_description = modes.empty? ? 'ningún modo' : "los modos #{names(modes)}"
      value_description = values.empty? ? 'ningún valor' : "los valores #{names(values)}"
      add_note("El parámetro **#{name(item)}**#{parent_qualifier(item)} establece #{datum_reference(item, 'purpose')}.", chapter: name(item))
      add_requirement("El parámetro **#{name(item)}** debe ofrecer #{mode_description} y admitir #{value_description} cuando se seleccione el modo correspondiente.")
      add_validation("Comprobar que el parámetro #{name(item)} ofrece #{mode_description} y los valores habilitados para cada modo.")
    end

    def describe_mode(item, target_kinds: nil, offer_requirement: true)
      container = @items_by_id[item.parent_issue_id]
      targets = Array(@block_targets[item.id])
      targets = targets.select { |target| target_kinds.include?(target.cosmosys_item_kind_key) } if target_kinds
      describe_mode_header(item, container: container, offer_requirement: offer_requirement)
      targets.each do |target|
        case target.cosmosys_item_kind_key
        when 'poris_param'
          add_requirement("Cuando esté seleccionado el modo **#{name(item)}**, el parámetro **#{name(target)}** debe estar disponible.")
          add_validation("Seleccionar #{name(item)} y comprobar que el parámetro #{name(target)} está disponible.")
          subtree(target).drop(1).each { |descendant| describe_item(descendant) }
          describe_parameter(target)
        when 'poris_mode'
          target_container = @items_by_id[target.parent_issue_id]
          next unless target_container && CONTAINER_KINDS.include?(target_container.cosmosys_item_kind_key)

          if target_container.cosmosys_item_kind_key == 'poris_param' && container&.cosmosys_item_kind_key == 'poris_sys'
            add_requirement("Cuando el sistema **#{name(container)}** esté en el modo **#{name(item)}**, el parámetro **#{name(target_container)}** debe estar en el modo **#{name(target)}**.")
            add_validation("Seleccionar el modo #{name(item)} en #{name(container)} y comprobar que el parámetro #{name(target_container)} queda en el modo #{name(target)}.")
          else
            context = container ? "el #{poris_noun(container.cosmosys_item_kind_key)} **#{name(container)}**" : 'el sistema PORIS'
            target_noun = poris_noun(target_container.cosmosys_item_kind_key)
            add_requirement("Cuando #{context} esté en el modo **#{name(item)}**, el #{target_noun} **#{name(target_container)}** debe estar en el modo **#{name(target)}**.")
            add_validation("Activar el modo #{name(item)} y comprobar que el #{target_noun} #{name(target_container)} queda en el modo #{name(target)}.")
          end
        when 'poris_value'
          parameter = @items_by_id[target.parent_issue_id]
          add_requirement("Cuando esté seleccionado el modo **#{name(item)}**, el parámetro **#{name(parameter)}** debe admitir la alternativa **#{name(target)}**.") if parameter
          add_validation("Seleccionar #{name(item)} y comprobar que #{name(target)} es una alternativa disponible para #{name(parameter)}.") if parameter
        end
      end
    end

    def describe_mode_header(item, container: @items_by_id[item.parent_issue_id], offer_requirement: true)
      missing_datum(item, 'purpose', 'Propósito del modo')
      add_note("El propósito del modo **#{name(item)}**#{parent_qualifier(item)} es #{datum_reference(item, 'purpose')}.", chapter: name(item))
      return unless container && CONTAINER_KINDS.include?(container.cosmosys_item_kind_key)

      noun = poris_noun(container.cosmosys_item_kind_key)
      add_requirement("El #{noun} **#{name(container)}** debe ofrecer el modo **#{name(item)}**.") if offer_requirement
      add_validation("Comprobar que el #{noun} #{name(container)} ofrece el modo #{name(item)}.")
    end

    def describe_mode_scope(item)
      describe_mode(item)
    end

    def describe_value(item)
      parameter = @items_by_id[item.parent_issue_id]
      related_modes = @items.select do |candidate|
        candidate.cosmosys_item_kind_key == 'poris_mode' && Array(@block_targets[candidate.id]).any? { |target| target.id == item.id }
      end
      if parameter
        add_requirement("El parámetro **#{name(parameter)}** debe admitir el valor **#{name(item)}** cuando esté habilitado por #{names(related_modes)}.")
        add_validation("Activar uno de los modos #{names(related_modes)} y comprobar que #{name(item)} se ofrece para #{name(parameter)}.")
      else
        add_requirement("El modelo PORIS declara el valor **#{name(item)}**.")
        add_validation("Comprobar que el valor #{name(item)} está presente en el modelo PORIS.")
      end
      add_value_uncertainties(item)
    end

    def describe_value_scope(item)
      describe_value(item)
    end

    def add_value_uncertainties(item)
      case item.pr_value_kind
      when 'float'
        missing_datum(item, 'unit', 'Unidad del valor numérico')
        missing_datum(item, 'resolution', 'Resolución o incremento permitido')
        missing_datum(item, 'bounds_inclusivity', 'Inclusividad de los límites')
        missing_datum(item, 'minimum', 'Límite inferior') if item.pr_min.nil?
        missing_datum(item, 'maximum', 'Límite superior') if item.pr_max.nil?
        missing_datum(item, 'default', 'Valor numérico predeterminado') if item.pr_default.nil?
        missing_datum(item, 'numeric_tolerance', 'Tolerancia para verificar el resultado')
        minimum = item.pr_min || datum_reference(item, 'minimum')
        maximum = item.pr_max || datum_reference(item, 'maximum')
        default = item.pr_default || datum_reference(item, 'default')
        range = [minimum, maximum].join('…')
        add_requirement("El valor numérico **#{name(item)}** debe respetar el rango modelado [#{range}] en #{datum_reference(item, 'unit')}, con resolución #{datum_reference(item, 'resolution')} y valor predeterminado #{default}.")
        add_validation("Probar el valor predeterminado #{default} y las fronteras del rango [#{range}]; definir puntos con #{datum_reference(item, 'unit')}, #{datum_reference(item, 'resolution')}, inclusividad #{datum_reference(item, 'bounds_inclusivity')} y tolerancia #{datum_reference(item, 'numeric_tolerance')}.")
      when 'text'
        missing_datum(item, 'text_constraints', 'Restricciones del texto')
        missing_datum(item, 'default_text', 'Texto predeterminado') if item.pr_default_text.blank?
        add_requirement("El valor textual **#{name(item)}** debe cumplir las restricciones #{datum_reference(item, 'text_constraints')}.")
        add_validation("Probar el valor textual predeterminado y los casos límite definidos en #{datum_reference(item, 'text_constraints')}.")
      else
        missing_datum(item, 'value_meaning', 'Significado de la alternativa enumerada')
        add_requirement("El valor enumerado **#{name(item)}** debe estar disponible como alternativa discreta con significado #{datum_reference(item, 'value_meaning')}.")
        add_validation("Seleccionar la alternativa #{name(item)} y comprobar que queda activa según #{datum_reference(item, 'value_meaning')}.")
      end
    end

    def describe_command(item)
      container = @items_by_id[item.parent_issue_id]
      missing_datum(item, 'purpose', 'Propósito del comando')
      missing_datum(item, 'effect', 'Efecto esperado del comando')
      if container
        noun = poris_noun(container.cosmosys_item_kind_key)
        with_requirement_chapter('Comandos') do
          add_requirement("El #{noun} **#{name(container)}** debe aceptar el comando **#{name(item)}**.")
          add_requirement("Cuando se invoque el comando **#{name(item)}** de #{name(container)}, se producirá el efecto: #{datum_reference(item, 'effect')}.")
        end
        add_validation("Comprobar que el #{noun} #{name(container)} acepta el comando #{name(item)}.")
        add_validation("Invocar el comando #{name(item)} de #{name(container)} y comprobar el efecto definido en #{datum_reference(item, 'effect')}.")
      else
        with_requirement_chapter('Comandos') do
          add_requirement("El modelo PORIS debe aceptar el comando **#{name(item)}**.")
          add_requirement("Cuando se invoque el comando **#{name(item)}**, se producirá el efecto: #{datum_reference(item, 'effect')}.")
        end
        add_validation("Comprobar que el comando #{name(item)} está disponible para su invocación.")
        add_validation("Invocar el comando #{name(item)} y comprobar el efecto definido en #{datum_reference(item, 'effect')}.")
      end
    end

    def missing_datum(item, property, description)
      key = datum_key(item, property)
      @datums[key] ||= { key: key, description: datum_description(item, property, description) }
    end

    def datum_description(item, property, description)
      noun = datum_item_noun(item)
      item_name = "**#{name(item)}**"
      return "Propósito del #{noun} #{item_name}" if property == 'purpose'
      return "Efecto esperado del comando #{item_name}" if item.cosmosys_item_kind_key == 'poris_cmd' && property == 'effect'

      "#{description} (#{noun} #{item_name})"
    end

    def datum_item_noun(item)
      case item.cosmosys_item_kind_key
      when 'poris_sys' then 'sistema'
      when 'poris_param' then 'parámetro'
      when 'poris_mode' then 'modo'
      when 'poris_value'
        case item.pr_value_kind
        when 'float' then 'valor numérico'
        when 'text' then 'valor textual'
        else 'valor enumerado'
        end
      when 'poris_cmd' then 'comando'
      else 'elemento PORIS'
      end
    end

    def datum_key(item, property)
      "poris.#{item.csid.presence || item.id}.#{property}"
    end

    def datum_reference(item, property)
      "${#{datum_key(item, property)}.value}"
    end

    def datums_markdown
      return "## csDatum compartidos\n\nNo se requieren datos pendientes para este alcance.\n\n---\n" if @datums.empty?

      entries = @datums.values.sort_by { |datum| datum[:key] }.map do |datum|
        "- `${#{datum[:key]}.value}` — #{datum[:description]}; valor: **TBD**."
      end
      "## csDatum compartidos\n\n#{entries.join("\n")}\n\n---\n"
    end

    def add_note(text, chapter:)
      @notes << { chapter: chapter, text: text }
    end

    def notes_markdown
      return '' if @notes.empty?

      if issue.cosmosys_item_kind_key == 'poris_sys'
        heading = "## Información del sistema #{name(issue)}"
        entries = @notes.uniq.map { |note| "- #{note[:text]}" }.join("\n")
        return "#{heading}\n\n#{entries}\n\n---\n"
      end

      chapters = @notes.uniq.group_by { |note| note[:chapter] }
      content = chapters.map do |chapter, notes|
        entries = notes.map { |note| "- #{note[:text]}" }.join("\n")
        if issue.cosmosys_item_kind_key == 'poris_sys' && chapter == name(issue)
          entries
        else
          "### #{chapter}\n\n#{entries}"
        end
      end
      heading = issue.cosmosys_item_kind_key == 'poris_sys' ? "## Información del sistema #{name(issue)}" : '## Información del modelo'
      "#{heading}\n\n#{content.join("\n\n")}\n\n---\n"
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
        content = ["## #{chapter}"]
        active_topic = nil
        entries.each do |requirement|
          if requirement[:topic] != active_topic
            active_topic = requirement[:topic]
            if active_topic.present?
              content << "### #{active_topic}"
              intro = @requirement_topic_intros[[chapter, active_topic]]
              content << intro if intro.present?
            end
          end
          requirement_id += 1
          content << ("#### R-%04d\n\n%s" % [requirement_id, requirement[:text]])
        end
        sections << content.join("\n\n")
      end
      sections.join("\n\n---\n\n")
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

      "los #{label} #{plain_names(entries.sort_by { |child| [child.csid.to_s, child.id] })}"
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
      " de #{name(parent)}" if parent
    end

    def add_validation(text)
      @validations << "### V-%04d\n\n#{text}" % (@validations.length + 1)
    end

    def document(content)
      content.presence || "## Vista previa\n\nEste nodo no genera fragmentos con las reglas actuales."
    end

    def names(items)
      values = items.map { |item| "**#{name(item)}**" }.uniq
      values.empty? ? 'ninguna' : values.join(', ')
    end

    def poris_noun(kind)
      kind == 'poris_sys' ? 'sistema' : 'parámetro'
    end

    def plural_por(noun, count)
      noun == 'sistema' ? (count == 1 ? 'el sistema' : 'los sistemas') : (count == 1 ? 'el parámetro' : 'los parámetros')
    end

    def name(item)
      item&.subject.to_s.gsub(/[\\`*_{}\[\]()#+.!|>~-]/) { |character| "\\#{character}" }
    end
  end
end
