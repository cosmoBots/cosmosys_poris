module CosmosysPoris
  class ProjectDatumGenerator
    Plan = Struct.new(:datums, :existing, :missing, :target_project, keyword_init: true)
    Result = Struct.new(:created, :existing, keyword_init: true)

    def initialize(source_project, user: User.current)
      @source_project = source_project
      @user = user
    end

    def plan(target_project: @source_project)
      selection = Cosmosys::ViewAudienceSelector.for_project(
        @source_project, scope: :project_and_descendants, user: @user,
        relation_types: OptionRelations::ENABLEMENT_TYPES
      )
      validate_target!(target_project, selection: selection)
      datums = ProjectSpecPreview.new(@source_project, user: @user, selection: selection).render.datums
      key_list = datums.map { |datum| datum[:key].downcase }
      project_ids = selection.projects.map(&:id)
      matching = if key_list.empty?
                   Issue.none
                 else
                   Issue.joins(:tracker)
                        .where(project_id: project_ids)
                        .where(Issue.arel_table[:csid].lower.in(key_list))
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
            subject: datum.fetch(:subject).truncate(255),
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

    # Restrict refresh to existing canonical data in this generation preview.
    # Never infer provenance by subject/description, or create missing data.
    def refresh_entries(current_plan)
      current_plan.existing.group_by { |definition| definition.fetch(:source_id) }.flat_map do |source_id, definitions|
        source = Issue.visible(@user).find(source_id)
        keys = definitions.map { |definition| definition.fetch(:key).downcase }
        AssociatedDatums.new(source, user: @user).entries
          .select { |entry| keys.include?(entry[:item].csid.downcase) }
          .map { |entry| entry.merge(source: source) }
      end
    end

    def refresh(target_project: @source_project, expected: {}, descriptions: false)
      Issue.transaction(requires_new: true) do
        entries = refresh_entries(plan(target_project: target_project))
        raise ArgumentError, I18n.t('cosmosys_poris.datums.refresh_none') if entries.empty?
        unless entries.map { |entry| entry[:item].id.to_s }.sort == expected.keys.sort
          raise ArgumentError, I18n.t('cosmosys_poris.datums.refresh_stale')
        end
        entries.group_by { |entry| entry[:source] }.flat_map do |source, rows|
          AssociatedDatums.new(source, user: @user).refresh(
            ids: rows.map { |entry| entry[:item].id }, expected: expected, descriptions: descriptions)
        end
      end
    end

    private

    def validate_target!(target_project, selection:)
      raise ActiveRecord::RecordNotFound unless target_project && selection.projects.any? { |project| project.id == target_project.id }
      raise ActiveRecord::RecordNotFound unless target_project.trackers.exists?(csys_key: 'cs_datum')
      raise ActiveRecord::RecordNotFound unless @user&.allowed_to?(:add_issues, target_project)
    end

    def provenance_description(datum)
      I18n.t('cosmosys_poris.datums.generated_description', source: datum[:source_csid], property: datum[:property])
    end
  end
end
