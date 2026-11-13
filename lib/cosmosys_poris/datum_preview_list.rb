module CosmosysPoris
  # Navigation to definitions, not expression evaluation or dictionary usage.
  module DatumPreviewList
    def self.render(datums, project:, user:)
      prefix = 'cosmosys_poris.spec_preview.shared_datums'
      return I18n.t("#{prefix}.empty") if datums.empty?

      dictionary = Cosmosys::ProjectDataDictionary.current(project: project, user: user)
      entries = datums.sort_by { |datum| datum[:key].downcase }.map do |datum|
        key = datum.fetch(:key)
        entry = dictionary.fetch(key)
        reference = if entry&.issue&.cosmosys_item_kind_key == 'datum'
          path = Rails.application.routes.url_helpers.issue_path(entry.issue,
            script_name: Redmine::Utils.relative_url_root)
          "[#{key}](#{path})"
        else
          "`#{key}` — #{I18n.t("#{prefix}.missing")}"
        end
        I18n.t("#{prefix}.entry", reference: reference)
      end
      I18n.t("#{prefix}.list", entries: entries.join("\n"))
    end
  end
end
