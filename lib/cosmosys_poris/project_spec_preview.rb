require 'set'

module CosmosysPoris
  class ProjectSpecPreview
    Result = Struct.new(:requirements_markdown, :validation_markdown, :datums, keyword_init: true)

    def initialize(project, user: User.current)
      @project = project
      @user = user
    end

    def render
      @project.with_cosmosys_locale do
        items = Issue.visible(@user)
                     .where(project_id: @project.self_and_descendants.select(:id))
                     .includes(:parent)
                     .to_a
                     .select(&:cosmosys_poris?)
        item_ids = items.map(&:id).to_set
        roots = items.select { |item| !item.parent_issue_id || !item_ids.include?(item.parent_issue_id) }
                      .sort_by { |item| [item.csid.to_s, item.id] }
        previews = roots.map do |root|
          [root, SpecPreview.new(root, user: @user, locale_project: @project).render, :root]
        end

        # A prSys preview intentionally stops at the interface modes of its
        # child parameters. Add a focused preview for every nested prParam so
        # the project-wide output also contains value/range requirements.
        root_ids = roots.map(&:id).to_set
        parameter_scopes = items.select do |item|
          item.cosmosys_item_kind_key == 'poris_param' && !root_ids.include?(item.id)
        end.sort_by { |item| [item.csid.to_s, item.id] }
        previews.concat(parameter_scopes.map do |parameter|
          [parameter, SpecPreview.new(parameter, user: @user, locale_project: @project).render, :parameter]
        end)

        datums = previews.flat_map { |_item, preview, _scope| preview.datums }.uniq { |datum| datum[:key].downcase }

        Result.new(
          requirements_markdown: document(datums_markdown(datums) + roots_body(previews, :requirements_body, 'requirements')),
          validation_markdown: document(datums_markdown(datums) + roots_body(previews, :validation_body, 'validation')),
          datums: datums
        )
      end
    end

    private

    def datums_markdown(datums)
      return I18n.t('cosmosys_poris.spec_preview.shared_datums.empty') if datums.empty?

      entries = datums.sort_by { |datum| datum[:key].downcase }.map do |datum|
        I18n.t('cosmosys_poris.spec_preview.shared_datums.entry', key: datum[:key], description: datum[:description])
      end
      I18n.t('cosmosys_poris.spec_preview.shared_datums.list', entries: entries.join("\n"))
    end

    def roots_body(previews, body_attribute, kind)
      body = previews.map do |item, preview, scope|
        content = preview.public_send(body_attribute)
        next if content.blank?

        heading_key = scope == :parameter ? 'parameter_scope' : 'root'
        heading = I18n.t("cosmosys_poris.spec_preview.project_preview.#{heading_key}", name: markdown_name(item.subject))
        [heading, renumber(content, kind)].join("\n\n")
      end.compact
      [I18n.t("cosmosys_poris.spec_preview.project_preview.#{kind}"), body.join("\n\n")].compact_blank.join("\n\n")
    end

    def renumber(content, kind)
      prefix = kind == 'requirements' ? 'R' : 'V'
      counter = (@counters ||= Hash.new(0))
      content.gsub(/^(#+\s+)#{prefix}-\d{4}$/) do
        heading_prefix = Regexp.last_match(1)
        counter[prefix] += 1
        "#{heading_prefix}#{format('%s-%04d', prefix, counter[prefix])}"
      end
    end

    def markdown_name(value)
      value.to_s.gsub(/[\\`*_{}\[\]()#+.!|>~-]/) { |character| "\\#{character}" }
    end

    def document(content)
      content.presence || I18n.t('cosmosys_poris.spec_preview.empty_preview')
    end
  end
end
