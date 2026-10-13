require 'json'

module CosmosysPoris
  module IssuePatch
    VALUE_KINDS = %w[enum float text].freeze
    SAFE_ATTRIBUTES = %w[
      pr_src_label pr_value_kind pr_min pr_default pr_max pr_default_text
    ].freeze

    def self.prepended(base)
      base.class_eval do
        safe_attributes(*SAFE_ATTRIBUTES)
        has_many :cosmosys_poris_labels,
                 class_name: 'CosmosysPoris::ItemLabel',
                 foreign_key: :issue_id,
                 dependent: :destroy,
                 inverse_of: :issue
        before_validation :cosmosys_poris_apply_defaults, on: :create
        before_validation :cosmosys_poris_clear_schedule_dates
        validate :cosmosys_poris_validate_fields
      end
    end

    def cosmosys_poris?
      cosmosys_item_kind_key.to_s.start_with?('poris_')
    end

    def cosmosys_poris_value?
      cosmosys_item_kind_key == 'poris_value'
    end

    def cosmosys_diagram_node_margin(_kind = 'hierarchy')
      return '0.06,0.04' if cosmosys_item_kind_key == 'poris_mode'

      super
    end

    def cosmosys_diagram_sibling_rank(_kind = 'hierarchy')
      return 0 if %w[poris_mode poris_cmd].include?(cosmosys_item_kind_key)
      return 1 if %w[poris_sys poris_param].include?(cosmosys_item_kind_key) || cosmosys_poris_value?

      super
    end

    def cosmosys_hierarchy_cluster_fill_color
      return cosmosys_diagram_fill_color('hierarchy') if cosmosys_item_kind_key == 'poris_param'

      super
    end

    # PORIS diagrams identify nodes by their model names, not by cosmoSys IDs.
    def cosmosys_diagram_identifier_text(kind = 'hierarchy')
      return nil if cosmosys_poris?

      super
    end

    def cosmosys_diagram_subject_text(kind = 'hierarchy', boundary: false)
      title = if cosmosys_poris? && kind.to_s == 'dependency'
                cosmosys_poris_dependency_name(boundary: boundary)
              else
                super
              end
      return title unless cosmosys_poris_value? && pr_value_kind == 'float'

      limits = [
        ('min ' + pr_min.to_s if pr_min.present?),
        ('default ' + pr_default.to_s if pr_default.present?),
        ('max ' + pr_max.to_s if pr_max.present?)
      ].compact
      return title if limits.empty?

      [title, cosmosys_wrapped_diagram_text(limits.join(' · '), max_width: 24)].join("\\n")
    end

    def cosmosys_diagram_node_label(kind = 'hierarchy', boundary: false, dependency_container: nil)
      return super unless cosmosys_poris?
      dependency_container = cosmosys_dependency_container_node? if kind.to_s == 'dependency' && dependency_container.nil?
      return cosmosys_dependency_container_label(boundary: boundary) if kind.to_s == 'dependency' && dependency_container

      return cosmosys_poris_value_record_label(include_parent: kind.to_s == 'dependency') if cosmosys_poris_value?
      return cosmosys_poris_mode_record_label(boundary: boundary) if kind.to_s == 'dependency' && cosmosys_item_kind_key == 'poris_mode'

      title = cosmosys_diagram_subject_text(kind, boundary: boundary)
      cosmosys_diagram_shape(kind).to_s == 'Mrecord' ? "{#{title}}" : title
    end

    def cosmosys_dependency_container_label(boundary: false)
      return super unless cosmosys_poris?

      cosmosys_poris_wrapped_name(subject, boundary: boundary)
    end

    def cosmosys_dependency_relation_color(relation_type)
      return '#FF9900' if cosmosys_poris? && relation_type.to_s == 'precedes'

      super
    end

    def cosmosys_dependency_relation_arrowhead(relation_type)
      return 'vee' if cosmosys_poris? && relation_type.to_s == 'precedes'

      super
    end

    def cosmosys_dependency_relation_edge_style(relation_type)
      return 'solid' if cosmosys_poris? && relation_type.to_s == 'precedes'

      super
    end

    def cosmosys_poris_labels_payload
      return '[]' unless cosmosys_poris?

      labels = cosmosys_poris_labels.includes(:label_scope).order('cosmosys_poris_label_scopes.key').map do |item_label|
        { 'scope' => item_label.label_scope.key, 'label' => item_label.label }
      end
      labels.to_json
    end

    def cosmosys_poris_replace_labels_payload!(payload)
      return unless cosmosys_poris?

      entries = JSON.parse(payload.to_s.presence || '[]')
      raise ArgumentError, 'PORIS labels must be a JSON array' unless entries.is_a?(Array)

      normalized = entries.map do |entry|
        raise ArgumentError, 'Invalid PORIS label entry' unless entry.is_a?(Hash)

        scope_key = entry['scope'].to_s.strip.upcase
        label = entry['label'].to_s.strip
        raise ArgumentError, 'PORIS label scope and label are required' if scope_key.blank? || label.blank?

        [scope_key, label]
      end
      raise ArgumentError, 'A PORIS item may have only one label per scope' if normalized.map(&:first).uniq.length != normalized.length

      transaction do
        cosmosys_poris_labels.destroy_all
        normalized.each do |scope_key, label|
          scope = CosmosysPoris::LabelScope.find_or_create_by!(key: scope_key) { |record| record.name = scope_key }
          cosmosys_poris_labels.create!(label_scope: scope, label: label)
        end
      end
    end

    private

    def cosmosys_poris_dependency_name(boundary: false)
      parent_item = parent
      prefix = parent_item.subject if parent_item&.cosmosys_poris? && parent_item.visible?(User.current)
      name = [prefix, subject].compact_blank.join('/')
      cosmosys_poris_wrapped_name(name, boundary: boundary)
    end

    # Match the legacy PORIS dependency capsule: the parent and mode names are
    # separate Graphviz record fields. With rankdir=TB the divider is horizontal.
    def cosmosys_poris_mode_record_label(boundary: false)
      parent_item = parent
      parent_name = if parent_item&.cosmosys_poris? && parent_item.visible?(User.current)
                      parent_item.subject.to_s
                    end
      mode_name = subject.to_s
      mode_name = "+ #{mode_name}" if boundary
      mode_field = cosmosys_poris_record_field(mode_name)
      return "{#{mode_field}}" if parent_name.blank?

      parent_field = cosmosys_poris_record_field(parent_name)
      "{ #{parent_field}|#{mode_field}}"
    end

    # Legacy value labels contain the parent/value heading and, for numeric
    # values, a second record row with min/default/max.
    def cosmosys_poris_value_record_label(include_parent:)
      parent_item = parent
      parent_name = if include_parent && parent_item&.cosmosys_poris? && parent_item.visible?(User.current)
                      parent_item.subject.to_s
                    end
      heading = [parent_name, subject].compact_blank.map { |field| cosmosys_poris_record_field(field) }
      heading_label = heading.one? ? heading.first : "#{heading.first}|#{heading.last}"
      details = if pr_value_kind == 'float'
                  values = [pr_min, pr_default, pr_max]
                  values.any?(&:present?) ? values.map { |value| cosmosys_poris_record_field(value.to_s) } : []
                elsif pr_default_text.present?
                  [cosmosys_poris_record_field(pr_default_text)]
                else
                  []
                end
      return "{#{heading_label}}" if details.empty?

      "{{#{heading_label}}|{#{details.join('|')}}}"
    end

    def cosmosys_poris_record_field(text)
      cosmosys_wrapped_diagram_text(text, max_width: 16)
        .gsub(/[{}|]/) { |character| "\\#{character}" }
    end

    def cosmosys_poris_wrapped_name(name, boundary: false)
      text = cosmosys_wrapped_diagram_text(name, max_width: 16)
      boundary ? "+ #{text}" : text
    end

    def cosmosys_poris_apply_defaults
      self.pr_value_kind ||= 'enum' if cosmosys_poris_value?
    end

    def cosmosys_poris_clear_schedule_dates
      return unless cosmosys_poris?

      self.start_date = nil
      self.due_date = nil
    end

    def cosmosys_poris_validate_fields
      return unless cosmosys_poris?

      if cosmosys_poris_value? && !VALUE_KINDS.include?(pr_value_kind.to_s)
        errors.add(:pr_value_kind, :inclusion)
      end

      return unless cosmosys_poris_value? && pr_value_kind == 'float'

      errors.add(:pr_default, :greater_than_or_equal_to) if pr_min.present? && pr_default.present? && pr_default < pr_min
      errors.add(:pr_default, :less_than_or_equal_to) if pr_max.present? && pr_default.present? && pr_default > pr_max
      errors.add(:pr_min, :less_than_or_equal_to) if pr_min.present? && pr_max.present? && pr_min > pr_max
    end
  end
end

Issue.prepend(CosmosysPoris::IssuePatch) unless Issue < CosmosysPoris::IssuePatch
