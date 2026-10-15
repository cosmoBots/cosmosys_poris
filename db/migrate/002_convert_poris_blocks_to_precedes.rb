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

    conflicts = select_values(<<~SQL)
      SELECT blocks.id
      FROM issue_relations blocks
      INNER JOIN issues source ON source.id = blocks.issue_from_id
      INNER JOIN trackers source_trackers ON source_trackers.id = source.tracker_id
      INNER JOIN issues target ON target.id = blocks.issue_to_id
      INNER JOIN trackers target_trackers ON target_trackers.id = target.tracker_id
      INNER JOIN issue_relations precedes
        ON precedes.issue_from_id = blocks.issue_from_id
       AND precedes.issue_to_id = blocks.issue_to_id
       AND precedes.relation_type = 'precedes'
      WHERE blocks.relation_type = 'blocks'
        AND source_trackers.csys_item_kind = 'poris_mode'
        AND target_trackers.csys_item_kind IN ('poris_mode', 'poris_value')
    SQL
    unless conflicts.empty?
      ids = conflicts.join(', ')
      raise "Cannot migrate PORIS blocks relations with existing precedes duplicates (issue_relation ids: #{ids})"
    end

    ids = poris_block_relations.map { |row| Integer(row['id']) }
    unless ids.empty?
      execute <<~SQL
        UPDATE issue_relations
        SET relation_type = 'precedes', delay = 0
        WHERE id IN (#{ids.join(',')})
      SQL
    end

    execute <<~SQL
      UPDATE issues
      SET start_date = NULL, due_date = NULL
      WHERE tracker_id IN (
        SELECT trackers.id
        FROM trackers
        WHERE trackers.csys_item_kind IN (#{quoted_kinds})
      )
    SQL
  end

  def down
    raise ActiveRecord::IrreversibleMigration,
          'PORIS precedes relations may now contain priorities and cannot be safely restored to blocks.'
  end

  private

  def poris_block_relations
    select_all(<<~SQL).to_a
      SELECT issue_relations.id,
             source_trackers.csys_item_kind AS source_kind,
             target_trackers.csys_item_kind AS target_kind
      FROM issue_relations
      INNER JOIN issues source ON source.id = issue_relations.issue_from_id
      INNER JOIN trackers source_trackers ON source_trackers.id = source.tracker_id
      INNER JOIN issues target ON target.id = issue_relations.issue_to_id
      INNER JOIN trackers target_trackers ON target_trackers.id = target.tracker_id
      WHERE issue_relations.relation_type = 'blocks'
        AND source_trackers.csys_item_kind IN (#{quoted_kinds})
        AND target_trackers.csys_item_kind IN (#{quoted_kinds})
    SQL
  end

  def quoted_kinds
    PORIS_KINDS.map { |kind| connection.quote(kind) }.join(', ')
  end
end
