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
    end

    def model
      response.headers['Cache-Control'] = 'no-store'
      render xml: ModelXmlExporter.new(@project, user: User.current, scope: @scope, issue: @issue).render,
             content_type: 'application/xml'
    end

    private

    def load_poris_view_context
      @scope = params[:scope].presence || (params[:issue_id].present? ? 'node' : 'project')
      @scope = 'project' unless ModelXmlExporter::SCOPES.include?(@scope)
      return if @scope == 'project' && params[:issue_id].blank?

      @issue = Issue.visible(User.current)
                     .where(project_id: @project.id)
                     .find(params[:issue_id])
      raise ActiveRecord::RecordNotFound unless @issue.cosmosys_poris?
    end
  end
end
