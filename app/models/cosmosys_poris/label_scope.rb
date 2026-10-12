module CosmosysPoris
  class LabelScope < ActiveRecord::Base
    self.table_name = 'cosmosys_poris_label_scopes'

    has_many :item_labels,
             class_name: 'CosmosysPoris::ItemLabel',
             foreign_key: :label_scope_id,
             dependent: :destroy,
             inverse_of: :label_scope

    before_validation { self.key = key.to_s.strip.upcase }
    validates :key, presence: true, format: { with: /\A[A-Z][A-Z0-9_]*\z/ }, uniqueness: { case_sensitive: false }
    validates :name, presence: true
  end
end
