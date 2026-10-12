module CosmosysPoris
  module IssueRelationPatch
    def self.included(base)
      base.class_eval do
        validate :cosmosys_poris_validate_blocking_relation
      end
    end

    private

    def cosmosys_poris_validate_blocking_relation
      return unless relation_type == 'blocks'

      source = issue_from
      target = issue_to
      return unless source&.cosmosys_poris? || target&.cosmosys_poris?

      valid_source = source&.cosmosys_item_kind_key == 'poris_mode'
      valid_target = %w[poris_mode poris_value].include?(target&.cosmosys_item_kind_key)
      errors.add(:issue_from, :invalid) unless valid_source
      errors.add(:issue_to, :invalid) unless valid_target
    end
  end
end

IssueRelation.include(CosmosysPoris::IssueRelationPatch) unless IssueRelation < CosmosysPoris::IssueRelationPatch
