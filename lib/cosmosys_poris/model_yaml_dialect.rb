require File.expand_path('../../../cosmosys/lib/cosmosys/model_yaml_dialects', __dir__)
require 'bigdecimal'

module CosmosysPoris
  module ModelYamlDialect
    FIELDS = %w[pr_src_label pr_value_kind pr_min pr_default pr_max pr_default_text].to_h { |field| [field.delete_prefix('pr_'), field] }.freeze
    TYPES = {'info' => 'info', 'system' => 'poris_sys', 'parameter' => 'poris_param',
             'mode' => 'poris_mode', 'value' => 'poris_value', 'command' => 'poris_cmd'}.freeze

    def self.kind(row) = TYPES.fetch(row.fetch('type'), row.fetch('type'))

    def self.validate_item(row)
      fields = row.fetch('fields', {}).filter_map do |key, value|
        name = FIELDS.key(key) || (key if FIELDS.key?(key))
        [name, value] if name
      end.to_h
      if kind(row) != 'poris_value' && (fields.keys & %w[min default max default_text]).any?
        raise ArgumentError, 'Only PORIS values may declare ranges or default_text'
      end
      fields.each do |key, value|
        if %w[min default max].include?(key)
          numeric = value.is_a?(Numeric) && value.finite?
          decimal = value.is_a?(String) && value.match?(/\A[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\z/) && BigDecimal(value, exception: false)&.finite?
          raise ArgumentError, "#{key} must be a finite number" unless numeric || decimal
          # Match the native decimal(20,6) domain and bound expansion of exponent
          # notation before handing a user-controlled value to Rails/presentation.
          raise ArgumentError, "#{key} exceeds the native numeric range" unless BigDecimal(value.to_s).abs < BigDecimal('1e14')
        else
          raise ArgumentError, "#{key} must be text" unless value.is_a?(String)
        end
      end
      kind = fields.fetch('value_kind', 'enum')
      raise ArgumentError, 'Unknown PORIS value_kind' unless %w[enum float text].include?(kind)
      return unless self.kind(row) == 'poris_value' && kind == 'float'

      min, default, max = fields.values_at('min', 'default', 'max').map { |value| BigDecimal(value.to_s, exception: false) unless value.nil? }
      raise ArgumentError, 'Float values require min <= default <= max and min < max' unless min && default && max && min < max && default.between?(min, max)
    end

    def self.validate_relation(row, items)
      raise ArgumentError, 'PORIS uses precedes rather than blocks' if row['type'] == 'blocks'
      return unless row['type'] == 'precedes'

      unless kind(items.fetch(row['from'])) == 'poris_mode' && %w[poris_mode poris_value].include?(kind(items.fetch(row['to'])))
        raise ArgumentError, 'PORIS options connect a mode to a mode or value'
      end
    end
  end
end

Cosmosys::ModelYamlDialects.register('poris',
  types: CosmosysPoris::ModelYamlDialect::TYPES,
  fields: CosmosysPoris::ModelYamlDialect::FIELDS,
  validate_item: CosmosysPoris::ModelYamlDialect.method(:validate_item),
  validate_relation: CosmosysPoris::ModelYamlDialect.method(:validate_relation))
