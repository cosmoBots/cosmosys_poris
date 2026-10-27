class ConvertPorisBlocksToPrecedes < ActiveRecord::Migration[6.1]
  PORIS_KINDS = %w[poris_sys poris_param poris_mode poris_value poris_cmd].freeze
  OPTION_KINDS = %w[poris_mode poris_value].freeze

  def up
    invalid = poris_block_relations.reject do |row|
      row['source_kind'] == 'poris_mode' && OPTION_KINDS.include?(row['target_kind'])
    end
    unless invalid.empty?
      ids = invalid.map { |row| row['id'] }.join(', ')
      raise "Cannot migrate invalid PORIS blocks relations (issue_relation ids: #{ids})"
    end

    conflicts = poris_block_relations.filter_map do |row|
      row.fetch('id') if relation_class.where(
        issue_from_id: row.fetch('issue_from_id'), issue_to_id: row.fetch('issue_to_id'),
        relation_type: 'precedes'
      ).exists?
    end
    unless conflicts.empty?
      ids = conflicts.join(', ')
      raise "Cannot migrate PORIS blocks relations with existing precedes duplicates (issue_relation ids: #{ids})"
    end

    ids = poris_block_relations.map { |row| Integer(row['id']) }
    relation_class.where(id: ids).update_all(relation_type: 'precedes', delay: 0)
    issue_class.where(tracker_id: tracker_class.where(csys_item_kind: PORIS_KINDS).select(:id))
               .update_all(start_date: nil, due_date: nil)
  end

  def down
    raise ActiveRecord::IrreversibleMigration,
          'PORIS precedes relations may now contain priorities and cannot be safely restored to blocks.'
  end

  private

  def relation_class
    @relation_class ||= Class.new(ActiveRecord::Base) { self.table_name = 'issue_relations' }
  end

  def issue_class
    @issue_class ||= Class.new(ActiveRecord::Base) { self.table_name = 'issues' }
  end

  def tracker_class
    @tracker_class ||= Class.new(ActiveRecord::Base) { self.table_name = 'trackers' }
  end

  def poris_block_relations
    kinds = tracker_class.where(csys_item_kind: PORIS_KINDS).pluck(:id, :csys_item_kind).to_h
    item_kinds = issue_class.where(tracker_id: kinds.keys).pluck(:id, :tracker_id)
                           .to_h.transform_values { |tracker_id| kinds.fetch(tracker_id) }
    relation_class.where(relation_type: 'blocks', issue_from_id: item_kinds.keys, issue_to_id: item_kinds.keys)
                  .map do |relation|
      relation.attributes.slice('id', 'issue_from_id', 'issue_to_id').merge(
        'source_kind' => item_kinds.fetch(relation.issue_from_id),
        'target_kind' => item_kinds.fetch(relation.issue_to_id)
      )
    end
  end
end
