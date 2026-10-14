module CosmosysPoris
  class ViewerController < ApplicationController
    before_action :find_project_by_project_id
    before_action :authorize
    before_action :load_poris_view_context

    def show
      @model_url = project_poris_model_path(@project, format: :xml, scope: @scope, issue_id: @issue&.id)
      return unless @scope == 'project'

      @project_tab = %w[configuration requirements validation constructor automated_validation].include?(params[:tab]) ? params[:tab] : 'configuration'

      unless @issue
        @runtime_state = hydrated_runtime_state
        @runtime_commit_url = commit_project_poris_state_path(@project)
        response.headers['Cache-Control'] = 'private, no-store'
        @model_xml = ModelXmlExporter.new(@project, user: User.current, scope: 'project').render if @project_tab == 'configuration'
      end

      @combined_diagram_url = cosmosys_diagram_export_path(
        project_id: @project.identifier,
        kind: 'combined',
        diagram_format: 'svg',
        combined_layout_mode: 'dot',
        render_variant: 'v1',
        visible_layers_present: 1,
        visible_layers: %w[blocks precedes cross_project_boundaries]
      )
      return if @issue

      if %w[requirements validation].include?(@project_tab)
        @project_preview = ProjectSpecPreview.new(@project, user: User.current).render
      elsif @project_tab == 'constructor'
        @ruby_code_preview = RubyCodePreview.new(@project, user: User.current).render(include_validation: false)
      elsif @project_tab == 'automated_validation'
        @ruby_code_preview = RubyCodePreview.new(@project, user: User.current).render
      end
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

    def panel
      raise ActiveRecord::RecordNotFound unless @issue

      @model_xml = ModelXmlExporter.new(@project, user: User.current, scope: @scope, issue: @issue).render
      response.headers['Cache-Control'] = 'private, no-store'
      render partial: 'cosmosys_poris/viewer/sidebar_panel'
    end

    def commit
      raise ActiveRecord::RecordNotFound unless @scope == 'project' && @issue.nil?

      runtime = RuntimeModel.new(@project, user: User.current)
      saved_state = runtime_session_state
      runtime.restore(saved_state) if saved_state.any?
      previous_state = runtime.state
      operations = if params[:root].present?
                     runtime.operations_from_snapshot(viewer_snapshot(params[:root]), previous_state: previous_state)
                   else
                     []
                   end
      operations.concat(explicit_operations) if params[:operations].present?
      result = runtime.apply(operations)
      save_runtime_session_state(result.fetch('state'))
      response.headers['Cache-Control'] = 'no-store'
      render json: result
    rescue ActionController::ParameterMissing, ArgumentError, TypeError => error
      render json: { error: error.message }, status: :unprocessable_entity
    end

    def run_validation
      raise ActiveRecord::RecordNotFound unless @scope == 'project' && @issue.nil?

      generator = RubyCodePreview.new(@project, user: User.current)
      preview = generator.render
      steps = preview.validation_steps
      step_index = Integer(params.require(:step_index))
      raise ActionController::BadRequest, 'Validation step index is out of range' unless step_index.between?(0, steps.length - 1)

      progress = session[:cosmosys_poris_validation_progress] ||= {}
      project_key = @project.id.to_s
      expected_index = progress[project_key].to_i
      if step_index.zero?
        progress[project_key] = 0
      elsif step_index != expected_index
        return render json: { error: 'Validation steps must run in order' }, status: :conflict
      end

      runtime = RuntimeModel.new(@project, user: User.current)
      saved_state = runtime_session_state
      runtime.restore(saved_state) if saved_state.any?
      step = steps.fetch(step_index)
      result = if step[:stimulus]
                 runtime.apply([step[:stimulus]])
               else
                 { 'operations' => [], 'state' => runtime.state }
               end
      operations = result.fetch('operations')
      state_after = result.fetch('state')
      query_result = generator.evaluate_query(step[:query], state_after)
      status = if query_result.nil?
                 'unverified'
               elsif query_result
                 'passed'
               else
                 'failed'
               end
      passed = status == 'passed'
      result_row = { index: step_index, id: step[:id], title: step[:title], status: status }
      complete = status == 'failed' || step_index == steps.length - 1
      if %w[passed unverified].include?(status)
        progress[project_key] = step_index + 1
      else
        progress.delete(project_key)
      end
      skipped = status == 'failed' ? steps.drop(step_index + 1).each_with_index.map do |remaining, offset|
        { index: step_index + offset + 1, id: remaining[:id], title: remaining[:title], status: 'skipped' }
      end : []

      save_runtime_session_state(runtime.state)
      response.headers['Cache-Control'] = 'no-store'
      render json: {
        result: result_row,
        skipped: skipped,
        complete: complete,
        total_steps: steps.length,
        actual: operations.map { |operation| operation['accepted'] ? 'accepted' : operation['reason'] }.join('; '),
        query_result: query_result,
        query_reason: step.dig(:query, 'reason'),
        query_description: step[:query_description],
        query_expected: step[:query_expected],
        operations: operations,
        state: runtime.state
      }
    rescue ActionController::ParameterMissing, ArgumentError, TypeError => error
      render json: { error: error.message }, status: :unprocessable_entity
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

    def runtime_session_state
      states = session[:cosmosys_poris_runtime_state]
      states.is_a?(Hash) ? states[@project.id.to_s] || [] : []
    end

    def hydrated_runtime_state
      saved_state = runtime_session_state
      return [] if saved_state.empty?

      runtime = RuntimeModel.new(@project, user: User.current)
      runtime.restore(saved_state)
      runtime.state
    end

    def save_runtime_session_state(state)
      all_states = session[:cosmosys_poris_runtime_state] || {}
      all_states[@project.id.to_s] = Array(state).map do |row|
        row.slice('node_id', 'mode_id', 'value_id', 'data').compact
      end
      session[:cosmosys_poris_runtime_state] = all_states
    end

    def explicit_operations
      Array(params.require(:operations)).map do |operation|
        operation.permit(:type, :node_id, :mode_id, :value_id, :command_id, :data).to_h
      end
    end

    def viewer_snapshot(parameter)
      raw_input = parameter.respond_to?(:to_unsafe_h) ? parameter.to_unsafe_h : parameter
      input = raw_input.to_h.stringify_keys
      {
        'id' => input['id'],
        'mode' => input['mode'].is_a?(Hash) ? input['mode'].slice('id', 'name') : nil,
        'value' => input['value'].is_a?(Hash) ? input['value'].slice('id', 'name', 'type', 'number', 'data') : nil,
        'subsystems' => Array(input['subsystems']).map { |child| viewer_snapshot(child) }
      }
    end
  end
end
