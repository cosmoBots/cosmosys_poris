class CreateCosmosysPoris < ActiveRecord::Migration[6.1]
  ISSUE_COLUMNS = {
    pr_src_label: :string,
    pr_value_kind: :string,
    pr_min: { type: :decimal, precision: 20, scale: 6 },
    pr_default: { type: :decimal, precision: 20, scale: 6 },
    pr_max: { type: :decimal, precision: 20, scale: 6 },
    pr_default_text: :text
  }.freeze

  TRACKERS = [
    ['poris_sys', 'prSys', 'poris_sys'],
    ['poris_param', 'prParam', 'poris_param'],
    ['poris_mode', 'prMode', 'poris_mode'],
    ['poris_value', 'prValue', 'poris_value'],
    ['poris_cmd', 'prCmd', 'poris_cmd']
  ].freeze

  def up
    ISSUE_COLUMNS.each do |name, definition|
      if definition.is_a?(Hash)
        options = definition.except(:type)
        add_column :issues, name, definition.fetch(:type), **options unless column_exists?(:issues, name)
      else
        add_column :issues, name, definition unless column_exists?(:issues, name)
      end
    end
    add_index :issues, :pr_src_label unless index_exists?(:issues, :pr_src_label)
    add_index :issues, :pr_value_kind unless index_exists?(:issues, :pr_value_kind)

    create_table :cosmosys_poris_label_scopes do |t|
      t.string :key, null: false
      t.string :name, null: false
      t.timestamps null: false
    end unless table_exists?(:cosmosys_poris_label_scopes)
    add_index :cosmosys_poris_label_scopes, 'LOWER(key)', unique: true, name: 'idx_poris_label_scopes_lower_key' unless index_exists?(:cosmosys_poris_label_scopes, name: 'idx_poris_label_scopes_lower_key')

    create_table :cosmosys_poris_item_labels do |t|
      t.integer :issue_id, null: false
      t.integer :label_scope_id, null: false
      t.string :label, null: false
      t.timestamps null: false
    end unless table_exists?(:cosmosys_poris_item_labels)
    add_index :cosmosys_poris_item_labels, [:issue_id, :label_scope_id], unique: true, name: 'idx_poris_item_labels_item_scope' unless index_exists?(:cosmosys_poris_item_labels, name: 'idx_poris_item_labels_item_scope')
    add_foreign_key :cosmosys_poris_item_labels, :issues, column: :issue_id unless foreign_key_exists?(:cosmosys_poris_item_labels, :issues, column: :issue_id)
    add_foreign_key :cosmosys_poris_item_labels, :cosmosys_poris_label_scopes, column: :label_scope_id, name: 'fk_poris_item_labels_scope' unless foreign_key_exists?(:cosmosys_poris_item_labels, :cosmosys_poris_label_scopes, column: :label_scope_id)

    install_trackers
  end

  def down
    TRACKERS.reverse_each do |key, _name, _profile|
      tracker = tracker_class.find_by(csys_key: key)
      next unless tracker

      raise "Cannot remove PORIS tracker #{tracker.name} while it has items" if select_value("SELECT 1 FROM issues WHERE tracker_id = #{tracker.id} LIMIT 1")

      execute "DELETE FROM workflows WHERE tracker_id = #{tracker.id}" if table_exists?(:workflows)
      execute "DELETE FROM projects_trackers WHERE tracker_id = #{tracker.id}" if table_exists?(:projects_trackers)
      tracker.destroy!
    end
    drop_table :cosmosys_poris_item_labels if table_exists?(:cosmosys_poris_item_labels)
    drop_table :cosmosys_poris_label_scopes if table_exists?(:cosmosys_poris_label_scopes)
    ISSUE_COLUMNS.keys.reverse_each { |name| remove_column :issues, name if column_exists?(:issues, name) }
  end

  private

  def tracker_class
    @tracker_class ||= Class.new(ActiveRecord::Base) { self.table_name = 'trackers' }.tap(&:reset_column_information)
  end

  def install_trackers
    status_id = select_value('SELECT id FROM issue_statuses ORDER BY position, id LIMIT 1')
    raise 'cosmoSys PORIS requires at least one Redmine item status' if status_id.blank?

    source_id = select_value("SELECT id FROM trackers WHERE LOWER(name) = 'feature' ORDER BY id LIMIT 1") ||
                select_value('SELECT id FROM trackers ORDER BY id LIMIT 1')
    raise 'cosmoSys PORIS requires at least one tracker to copy workflow from' if source_id.blank?

    TRACKERS.each do |key, name, profile|
      tracker = tracker_class.find_by(csys_key: key) || tracker_class.new
      tracker.assign_attributes(name: name, csys_key: key, csys_item_kind: profile, default_status_id: status_id)
      tracker.save!
      copy_workflows(source_id, tracker.id)
      execute "INSERT INTO projects_trackers (project_id, tracker_id) SELECT id, #{tracker.id} FROM projects WHERE csys_project_profile = 'poris' ON CONFLICT DO NOTHING"
    end
  end

  def copy_workflows(source_id, tracker_id)
    return unless table_exists?(:workflows)

    columns = self.columns(:workflows).map(&:name) - %w[id tracker_id]
    quoted = columns.map { |column| connection.quote_column_name(column) }
    execute "DELETE FROM workflows WHERE tracker_id = #{tracker_id}"
    execute <<~SQL.squish
      INSERT INTO workflows (tracker_id, #{quoted.join(', ')})
      SELECT #{tracker_id}, #{quoted.join(', ')} FROM workflows WHERE tracker_id = #{source_id}
    SQL
  end
end
