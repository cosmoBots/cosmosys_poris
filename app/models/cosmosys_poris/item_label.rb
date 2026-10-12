module CosmosysPoris
  class ItemLabel < ActiveRecord::Base
    self.table_name = 'cosmosys_poris_item_labels'

    belongs_to :issue, inverse_of: :cosmosys_poris_labels
    belongs_to :label_scope,
               class_name: 'CosmosysPoris::LabelScope',
               inverse_of: :item_labels

    validates :label, presence: true
    validates :label_scope_id, uniqueness: { scope: :issue_id }
  end
end
