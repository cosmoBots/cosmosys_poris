require_dependency File.expand_path('../../../cosmosys/lib/cosmosys/ods_item_field_registry', __dir__)

module CosmosysPoris
  module OdsFields
    module_function

    FIELDS = %w[pr_src_label pr_value_kind pr_min pr_default pr_max pr_default_text].freeze

    def register!
      FIELDS.each do |name|
        next if Cosmosys::OdsItemFieldRegistry.names.include?(name)

        Cosmosys::OdsItemFieldRegistry.register(
          name,
          writer: ->(issue, value) { issue.public_send("#{name}=", value.presence) if issue.cosmosys_poris? }
        )
      end

      return if Cosmosys::OdsItemFieldRegistry.names.include?('pr_labels')

      Cosmosys::OdsItemFieldRegistry.register(
        'pr_labels',
        reader: ->(issue) { issue.cosmosys_poris_labels_payload },
        writer: lambda do |issue, value|
          issue.cosmosys_poris_replace_labels_payload!(value) if issue.cosmosys_poris?
        end
      )
    end
  end
end

CosmosysPoris::OdsFields.register!
