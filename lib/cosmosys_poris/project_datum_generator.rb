module CosmosysPoris
  class ProjectDatumGenerator
    Plan = Struct.new(:datums, :existing, :missing, :target_project, keyword_init: true)
    Result = Struct.new(:created, :existing, keyword_init: true)

    def initialize(source_project, user: User.current)
      @source_project = source_project
      @user = user
    end

    def plan(target_project: @source_project)
      validate_target!(target_project)
      datums = ProjectSpecPreview.new(@source_project, user: @user).render.datums
      key_list = datums.map { |datum| datum[:key].downcase }
      matching = if key_list.empty?
                   Issue.none
                 else
                   Issue.joins(:tracker)
                        .where(project_id: tree_project_ids)
                        .where('LOWER(issues.csid) IN (?)', key_list)
                 end
      datum_items = matching.where(trackers: { csys_item_kind: 'datum' }).to_a
      existing_by_key = datum_items.index_by { |issue| issue.csid.to_s.downcase }
      conflicts = matching.where.not(trackers: { csys_item_kind: 'datum' })
      conflicting_keys = conflicts.pluck(:csid)
      if conflicting_keys.any?
        raise ArgumentError, I18n.t('cosmosys_poris.datums.csid_conflict', keys: conflicting_keys.join(', '))
      end

      existing = datums.select { |datum| existing_by_key.key?(datum[:key].downcase) }
      missing = datums.reject { |datum| existing_by_key.key?(datum[:key].downcase) }
      Plan.new(datums: datums, existing: existing, missing: missing, target_project: target_project)
    end

    def call(target_project: @source_project)
      current_plan = plan(target_project: target_project)
      tracker = target_project.trackers.find_by(csys_key: 'cs_datum') || raise(ActiveRecord::RecordNotFound, 'csDatum tracker is not enabled')
      status = tracker.default_status || IssueStatus.order(:position, :id).first!
      priority = IssuePriority.default || IssuePriority.active.order(:position, :id).first
      created = []

      Issue.transaction do
        current_plan.missing.each do |datum|
          issue = Issue.new(
            project: target_project,
            tracker: tracker,
            status: status,
            priority: priority,
            author: @user,
            subject: datum[:description].to_s.gsub('**', '').truncate(255),
            description: provenance_description(datum)
          )
          issue.csid = datum[:key]
          issue.csys_value = 'TBD'
          issue.notify = false
          issue.save!
          created << issue
        end
      end

      Result.new(created: created, existing: current_plan.existing)
    end

    private

    def validate_target!(target_project)
      raise ActiveRecord::RecordNotFound unless target_project && tree_project_ids.include?(target_project.id)
      raise ActiveRecord::RecordNotFound unless target_project.trackers.exists?(csys_key: 'cs_datum')
      raise ActiveRecord::RecordNotFound unless @user&.allowed_to?(:add_issues, target_project)
    end

    def tree_project_ids
      @tree_project_ids ||= @source_project.root.self_and_descendants.pluck(:id)
    end

    def provenance_description(datum)
      I18n.t('cosmosys_poris.datums.generated_description', source: datum[:source_csid], property: datum[:property])
    end
  end
end
