module CosmosysPoris
  class Hooks < Redmine::Hook::ViewListener
    Cosmosys::IssuePanelRegistry.register(
      key: 'poris_requirements', location: :content,
      title: :label_cosmosys_poris_requirements_preview,
      url: ->(view, issue) { view.project_poris_issue_preview_path(project_id: issue.project.identifier, issue_id: issue.id, section: 'requirements') },
      available: ->(issue, _user) { issue.cosmosys_poris? }
    )
    Cosmosys::IssuePanelRegistry.register(
      key: 'poris_validation', location: :content,
      title: :label_cosmosys_poris_validation_preview,
      url: ->(view, issue) { view.project_poris_issue_preview_path(project_id: issue.project.identifier, issue_id: issue.id, section: 'validation') },
      available: ->(issue, _user) { issue.cosmosys_poris? }
    )
    Cosmosys::IssuePanelRegistry.register(
      key: 'poris_viewer', location: :sidebar, title: :label_cosmosys_poris_viewer,
      url: ->(view, issue) { view.project_poris_issue_sidebar_path(project_id: issue.project.identifier, issue_id: issue.id) },
      available: ->(issue, _user) { issue.cosmosys_poris? && issue.project.csys_project_profile == 'poris' }
    )

    render_on :view_issues_form_details_bottom,
              partial: 'hooks/cosmosys_poris/item_fields'
    render_on :view_issues_show_details_bottom,
              partial: 'hooks/cosmosys_poris/item_details'
    render_on :view_layouts_base_body_bottom,
              partial: 'hooks/cosmosys_poris/issue_panel_assets'
  end
end
