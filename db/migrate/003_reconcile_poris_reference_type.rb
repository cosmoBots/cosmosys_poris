class ReconcilePorisReferenceType < ActiveRecord::Migration[7.2]
  def up
    table = :cosmosys_poris_item_labels
    target = :cosmosys_poris_label_scopes
    source = columns(table).find { |column| column.name == 'label_scope_id' }
    destination = columns(target).find { |column| column.name == 'id' }
    key = foreign_keys(table).find { |entry| entry.column.to_s == 'label_scope_id' }
    if source.type != destination.type || source.limit != destination.limit
      remove_foreign_key table, column: :label_scope_id if key
      change_column table, :label_scope_id, destination.type, limit: destination.limit
      key = nil
    end
    add_foreign_key table, target, column: :label_scope_id, name: 'fk_poris_item_labels_scope' unless key
  end

  def down
    # The rewritten base migration already describes this reference type.
    # Preserve it until that table is removed by the base migration's down.
  end
end
