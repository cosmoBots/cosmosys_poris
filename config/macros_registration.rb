require_relative '../lib/cosmosys_poris/yaml_diagram'

Redmine::WikiFormatting::Macros.register do
  desc "Render an explicit, read-only PORIS YAML draft: {{poris_diagram\nformat: cosmosys-model\n...\n}}"
  macro :poris_diagram do |_object, args, text|
    raise l(:text_cosmosys_poris_yaml_macro_usage) unless args.empty? && text.present?

    @cosmosys_poris_yaml_diagram_index = @cosmosys_poris_yaml_diagram_index.to_i + 1
    svg = CosmosysPoris::YamlDiagram.render(text, instance_id: @cosmosys_poris_yaml_diagram_index)
    content_tag(:div, svg.html_safe, class: 'cosmosys-report-diagram cosmosys-poris-diagram')
  end
end
