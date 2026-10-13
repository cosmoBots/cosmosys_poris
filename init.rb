require 'redmine'

Redmine::Plugin.register :cosmosys_poris do
  name 'cosmoSys PORIS'
  author 'cosmoBots.eu'
  description 'PORIS model profiles and tooling for cosmoSys.'
  version '0.1.0'
  url 'https://cosmobots.eu'
  author_url 'https://cosmobots.eu'

  requires_redmine_plugin :cosmosys, version_or_higher: '0.1.7'

  permission :view_poris_model,
             { 'cosmosys_poris/viewer' => %i[show model commit run_validation datum_preflight generate_datums] },
             public: true,
             read: true

  menu :project_menu, :cosmosys_poris_viewer,
       { controller: 'cosmosys_poris/viewer', action: 'show' },
       caption: 'PORIS',
       after: :cosmosys,
       param: :project_id,
       permission: :view_poris_model,
       if: proc { |project| project&.csys_project_profile == 'poris' }
end

require_dependency 'issue'
require_dependency 'issue_relation'
require_dependency 'tracker'
require_dependency File.expand_path('lib/cosmosys_poris/profile_registration', __dir__)
require_dependency File.expand_path('lib/cosmosys_poris/issue_patch', __dir__)
require_dependency File.expand_path('lib/cosmosys_poris/ods_fields', __dir__)
require_dependency File.expand_path('lib/cosmosys_poris/issue_relation_patch', __dir__)
require_dependency File.expand_path('lib/cosmosys_poris/option_relations', __dir__)
require_dependency File.expand_path('lib/cosmosys_poris/model_xml_exporter', __dir__)
require_dependency File.expand_path('lib/cosmosys_poris/runtime_model', __dir__)
require_dependency File.expand_path('lib/cosmosys_poris/spec_preview', __dir__)
require_dependency File.expand_path('lib/cosmosys_poris/project_spec_preview', __dir__)
require_dependency File.expand_path('lib/cosmosys_poris/ruby_code_preview', __dir__)
require_dependency File.expand_path('lib/cosmosys_poris/project_datum_generator', __dir__)
require_dependency File.expand_path('lib/cosmosys_poris/hooks', __dir__)
