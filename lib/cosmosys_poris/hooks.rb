module CosmosysPoris
  class Hooks < Redmine::Hook::ViewListener
    render_on :view_issues_form_details_bottom,
              partial: 'hooks/cosmosys_poris/item_fields'
    render_on :view_issues_show_details_bottom,
              partial: 'hooks/cosmosys_poris/item_details'
    render_on :view_issues_show_description_bottom,
              partial: 'hooks/cosmosys_poris/item_preview'
    render_on :view_issues_sidebar_queries_bottom,
              partial: 'hooks/cosmosys_poris/issue_sidebar'
  end
end
