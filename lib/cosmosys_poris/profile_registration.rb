require_dependency File.expand_path('../../../cosmosys/lib/cosmosys/item_kind_registry', __dir__)
require_dependency File.expand_path('../../../cosmosys/lib/cosmosys/project_profile_registry', __dir__)

module CosmosysPoris
  module ProfileRegistration
    module_function

    def register!
      register_item_profiles!
      register_project_profile!
    end

    def register_item_profiles!
      register_item_profile(
        'poris_sys', label: :label_cosmosys_poris_sys,
        diagram_shape: 'box', diagram_fill_color: '#FFFFFF',
        can_have_children: true,
        allowed_parent_profiles: %w[info poris_sys].freeze
      )
      register_item_profile(
        'poris_param', label: :label_cosmosys_poris_param,
        diagram_shape: 'box', diagram_fill_color: '#C7E4FF',
        can_have_children: true,
        allowed_parent_profiles: %w[info poris_sys].freeze
      )
      register_item_profile(
        'poris_mode', label: :label_cosmosys_poris_mode,
        diagram_shape: 'Mrecord', diagram_fill_color: '#F7D37E',
        can_have_children: false,
        allowed_parent_profiles: %w[poris_sys poris_param].freeze
      )
      register_item_profile(
        'poris_value', label: :label_cosmosys_poris_value,
        diagram_shape: 'record', diagram_fill_color: 'lightcyan',
        can_have_children: false,
        allowed_parent_profiles: %w[poris_param].freeze
      )
      register_item_profile(
        'poris_cmd', label: :label_cosmosys_poris_cmd,
        diagram_shape: 'ellipse', diagram_fill_color: '#A8E6A1',
        can_have_children: false,
        allowed_parent_profiles: %w[poris_sys poris_param].freeze
      )
    end

    def register_item_profile(key, label:, diagram_shape:, diagram_fill_color:, can_have_children:, allowed_parent_profiles: nil)
      if Cosmosys::ItemKindRegistry.registered?(key)
        existing = Cosmosys::ItemKindRegistry.fetch(key)
        raise "item profile #{key} belongs to another provider" unless existing.provider == :cosmosys_poris

        return existing
      end

      children = case key
                 when 'poris_sys' then %w[poris_sys poris_param poris_mode poris_cmd]
                 when 'poris_param' then %w[poris_value poris_mode poris_cmd]
                 end

      Cosmosys::ItemKindRegistry.register(
        key,
        label: label,
        description: :text_cosmosys_poris_item_profile,
        provider: :cosmosys_poris,
        diagram_shape: diagram_shape,
        diagram_fill_color: diagram_fill_color,
        diagram_border_color: '#526779',
        dependency_rankdir: 'TB',
        can_have_children: can_have_children,
        can_split: false,
        aggregate_children: false,
        allowed_child_profiles: children&.freeze,
        allowed_parent_profiles: allowed_parent_profiles,
        dsm_mode: 'all',
        reference_mode: 'csid',
        report_diagrams: true,
        report_metadata: true
      )
    end

    def register_project_profile!
      return if Cosmosys::ProjectProfileRegistry.registered?('poris')

      Cosmosys::ProjectProfileRegistry.register(
        'poris',
        label: :label_cosmosys_poris_project_profile,
        description: :text_cosmosys_poris_project_profile,
        provider: :cosmosys_poris,
        required_trackers: [
          { key: 'poris_sys', name: 'prSys', item_profile: 'poris_sys' },
          { key: 'poris_param', name: 'prParam', item_profile: 'poris_param' },
          { key: 'poris_mode', name: 'prMode', item_profile: 'poris_mode' },
          { key: 'poris_value', name: 'prValue', item_profile: 'poris_value' },
          { key: 'poris_cmd', name: 'prCmd', item_profile: 'poris_cmd' }
        ].map(&:freeze).freeze,
        default_root_tracker: 'poris_sys',
        ods_export_template: 'plugins/cosmosys_poris/assets/templates/ods/poris_export_template.ods',
        default_disabled_modules: %w[calendar time_tracking news gantt].freeze,
        required_modules: %w[issue_tracking].freeze,
        default_report_columns: %w[tracker status pr_value_kind pr_min pr_default pr_max].freeze,
        default_item_list_columns: %w[chapter_label subject tracker status]
      )
    end
  end
end

CosmosysPoris::ProfileRegistration.register!
