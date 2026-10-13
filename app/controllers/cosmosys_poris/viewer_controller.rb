module CosmosysPoris
  class ViewerController < ApplicationController
    before_action :find_project_by_project_id
    before_action :authorize
    before_action :load_poris_view_context

    def show
      @model_url = project_poris_model_path(@project, format: :xml, scope: @scope, issue_id: @issue&.id)
      return unless @scope == 'project'

      @combined_diagram_url = cosmosys_diagram_export_path(
        project_id: @project.identifier,
        kind: 'combined',
        diagram_format: 'svg',
        combined_layout_mode: 'dot',
        render_variant: 'v1',
        visible_layers_present: 1,
        visible_layers: %w[blocks precedes]
      )
      return if @issue

      @project_preview = ProjectSpecPreview.new(@project, user: User.current).render
      @requirements_plugin_installed = Redmine::Plugin.installed?(:cosmosys_req)
      @validation_plugin_installed = Redmine::Plugin.installed?(:cosmosys_val)
    end

    def datum_preflight
      load_datum_targets
      @project_preview = ProjectSpecPreview.new(@project, user: User.current).render
      return if @datum_target_projects.empty?

      @target_project = selected_datum_target
      @datum_plan = ProjectDatumGenerator.new(@project, user: User.current).plan(target_project: @target_project)
    end

    def generate_datums
      load_datum_targets
      target_project = selected_datum_target
      result = ProjectDatumGenerator.new(@project, user: User.current).call(target_project: target_project)
      flash[:notice] = I18n.t('cosmosys_poris.datums.created_notice', created: result.created.length, existing: result.existing.length, project: target_project.name)
      redirect_to project_poris_viewer_path(@project)
    rescue ActiveRecord::RecordInvalid => error
      redirect_to project_poris_datum_preflight_path(@project, target_project_id: params[:target_project_id]), alert: error.record.errors.full_messages.to_sentence
    rescue ArgumentError => error
      redirect_to project_poris_datum_preflight_path(@project, target_project_id: params[:target_project_id]), alert: error.message
    end

    def model
      response.headers['Cache-Control'] = 'no-store'
      render xml: ModelXmlExporter.new(@project, user: User.current, scope: @scope, issue: @issue).render,
             content_type: 'application/xml'
    end

    private

    def load_poris_view_context
      raise ActiveRecord::RecordNotFound unless @project.csys_project_profile == 'poris'

      @scope = params[:scope].presence || (params[:issue_id].present? ? 'node' : 'project')
      @scope = 'project' unless ModelXmlExporter::SCOPES.include?(@scope)
      return if @scope == 'project' && params[:issue_id].blank?

      @issue = Issue.visible(User.current)
                     .where(project_id: @project.id)
                     .find(params[:issue_id])
      raise ActiveRecord::RecordNotFound unless @issue.cosmosys_poris?
    end

    def load_datum_targets
      @datum_target_projects = @project.root.self_and_descendants.select do |project|
        project.visible?(User.current) &&
          project.trackers.exists?(csys_key: 'cs_datum') &&
          User.current.allowed_to?(:add_issues, project)
      end
    end

    def selected_datum_target
      default_target = @datum_target_projects.find { |project| project.id == @project.id } || @datum_target_projects.first
      target_id = params[:target_project_id].presence || default_target&.id
      @datum_target_projects.find { |project| project.id == target_id.to_i } || raise(ActiveRecord::RecordNotFound)
    end
  end
end
