require 'set'

module CosmosysPoris
  module OptionRelations
    ENABLEMENT_TYPES = %w[blocks precedes].freeze
    TARGET_KINDS = %w[poris_mode poris_value].freeze

    module_function

    # Until the blocks-to-precedes migration is applied, read both relation
    # types. PORIS precedes.delay is an option priority: highest first, then
    # sibling tree order for equal priorities.
    def grouped_by_mode(mode_ids, relations: nil)
      relations ||= IssueRelation.includes(:issue_to)
                                 .where(issue_from_id: mode_ids, relation_type: ENABLEMENT_TYPES)
                                 .to_a
      mode_id_set = Array(mode_ids).to_set
      relations = relations.select do |relation|
        mode_id_set.include?(relation.issue_from_id) && ENABLEMENT_TYPES.include?(relation.relation_type.to_s)
      end
      relations.select! do |relation|
        target = relation.issue_to
        target&.cosmosys_poris? && TARGET_KINDS.include?(target.cosmosys_item_kind_key)
      end

      relations.group_by(&:issue_from_id).transform_values do |mode_relations|
        mode_relations.sort_by do |relation|
          target = relation.issue_to
          priority = relation.relation_type == 'precedes' ? relation.delay.to_i : 0
          [-priority, target.csposition.to_i, target.lft.to_i, target.id, relation.id]
        end
      end
    end
  end
end
