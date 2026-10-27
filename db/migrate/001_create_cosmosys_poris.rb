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
    # LabelScope normalizes keys to uppercase before validation.
    add_index :cosmosys_poris_label_scopes, :key, unique: true, name: 'idx_poris_label_scopes_key' unless index_exists?(:cosmosys_poris_label_scopes, name: 'idx_poris_label_scopes_key')

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

      issue_class = Class.new(ActiveRecord::Base) { self.table_name = 'issues' }
      raise "Cannot remove PORIS tracker #{tracker.name} while it has items" if issue_class.where(tracker_id: tracker.id).exists?

      workflow_class.where(tracker_id: tracker.id).delete_all if table_exists?(:workflows)
      assignment_class.where(tracker_id: tracker.id).delete_all if table_exists?(:projects_trackers)
      tracker.destroy!
    end
    drop_table :cosmosys_poris_item_labels if table_exists?(:cosmosys_poris_item_labels)
    drop_table :cosmosys_poris_label_scopes if table_exists?(:cosmosys_poris_label_scopes)
    ISSUE_COLUMNS.keys.reverse_each { |name| remove_column :issues, name if column_exists?(:issues, name) }
  end

  private

  def workflow_class
    @workflow_class ||= Class.new(ActiveRecord::Base) do
      self.table_name = 'workflows'
      self.inheritance_column = :_disabled_type
    end
  end

  def assignment_class
    @assignment_class ||= Class.new(ActiveRecord::Base) do
      self.table_name = 'projects_trackers'
      self.primary_key = nil
    end
  end

  def tracker_class
    @tracker_class ||= Class.new(ActiveRecord::Base) { self.table_name = 'trackers' }.tap(&:reset_column_information)
  end

  def install_trackers
    status_class = Class.new(ActiveRecord::Base) { self.table_name = 'issue_statuses' }
    status_id = status_class.order(:position, :id).pick(:id)
    raise 'cosmoSys PORIS requires at least one Redmine item status' if status_id.blank?

    source_id = tracker_class.where(tracker_class.arel_table[:name].lower.eq('feature')).order(:id).pick(:id) ||
                tracker_class.order(:id).pick(:id)
    raise 'cosmoSys PORIS requires at least one tracker to copy workflow from' if source_id.blank?

    TRACKERS.each do |key, name, profile|
      tracker = tracker_class.find_by(csys_key: key) || tracker_class.new
      tracker.assign_attributes(name: name, csys_key: key, csys_item_kind: profile, default_status_id: status_id)
      tracker.save!
      copy_workflows(source_id, tracker.id)
      project_class = Class.new(ActiveRecord::Base) { self.table_name = 'projects' }
      project_class.where(csys_project_profile: 'poris').find_each do |project|
        assignment_class.find_or_create_by!(project_id: project.id, tracker_id: tracker.id)
      end
    end
  end

  def copy_workflows(source_id, tracker_id)
    return unless table_exists?(:workflows)

    return if source_id == tracker_id

    workflow_class.where(tracker_id: tracker_id).delete_all
    workflow_class.where(tracker_id: source_id).find_each do |workflow|
      workflow_class.create!(workflow.attributes.except('id').merge('tracker_id' => tracker_id))
    end
  end
end
