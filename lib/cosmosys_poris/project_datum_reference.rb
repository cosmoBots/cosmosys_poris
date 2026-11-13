module CosmosysPoris
  # Shared identity for the project variables used by specs and the runtime.
  module ProjectDatumReference
    def self.properties(item)
      properties = case item.cosmosys_item_kind_key
                   when 'poris_sys' then { 'purpose' => 'system_purpose' }
                   when 'poris_param' then { 'purpose' => 'parameter_purpose' }
                   when 'poris_mode' then { 'purpose' => 'mode_purpose' }
                   when 'poris_cmd' then { 'purpose' => 'command_purpose', 'effect' => 'command_effect' }
                   when 'poris_value'
                     case item.pr_value_kind
                     when 'float'
                       { 'meaning' => 'range_meaning', 'unit' => 'range_unit',
                         'resolution' => 'range_resolution', 'bounds_inclusivity' => 'bounds_inclusivity',
                         'minimum' => 'range_minimum', 'maximum' => 'range_maximum',
                         'default' => 'range_default', 'tolerance' => 'range_tolerance' }
                     when 'text'
                       { 'meaning' => 'text_meaning', 'constraints' => 'text_constraints', 'default' => 'text_default' }
                     else
                       { 'meaning' => 'enum_meaning', 'default' => 'enum_default' }
                     end
                   else return {}
                   end
      properties.merge('test_preconditions' => 'test_case_preconditions', 'test_postconditions' => 'test_case_postconditions')
    end

    def self.key(item, property)
      source = item.csid.presence || "POR_#{item.id}"
      "#{source.gsub(/[^A-Za-z0-9]+/, '_').gsub(/\A_+|_+\z/, '')}_#{property}"
    end

    def self.description(definition)
      I18n.t('cosmosys_poris.datums.generated_description',
        source: definition.fetch(:source_csid), property: definition.fetch(:property),
        key: definition.fetch(:key))
    end
  end
end
