#!/usr/bin/env ruby

require 'pathname'

plugin_root = Pathname(__dir__).parent
source = Pathname(ENV.fetch('SOURCE_ODS', plugin_root.join('assets/templates/legacy/csExportTemplate.ods').to_s))
output = Pathname(ENV.fetch('OUTPUT_ODS', plugin_root.join('assets/templates/ods/poris_export_template.ods').to_s))

ENV['SOURCE_ODS'] = source.to_s
ENV['OUTPUT_ODS'] = output.to_s
load plugin_root.join('../cosmosys/scripts/prepare_ods_export_template.rb').cleanpath.to_s

workbook = Rspreadsheet.open(output.to_s)
items = workbook.worksheets('Items') || raise('Normalized template is missing Items')
extra = workbook.worksheets('ExtraFields') || raise('Normalized template is missing ExtraFields')

renames = {
  'prMin' => 'pr_min',
  'prDefault' => 'pr_default',
  'prMax' => 'pr_max',
  'prDefaultText' => 'pr_default_text'
}
[[items, renames], [extra, renames]].each do |sheet, mapping|
  (1..128).each do |column|
    current = sheet.cell(1, column).value.to_s
    sheet.cell(1, column).value = mapping.fetch(current) if mapping.key?(current)
  end
end

%w[pr_src_label pr_value_kind pr_labels].each do |field|
  next if (1..128).any? { |column| extra.cell(1, column).value.to_s == field }

  column = (1..128).find { |index| extra.cell(1, index).value.to_s.empty? } || raise("No room for #{field}")
  cell = extra.cell(1, column)
  cell.value = field
  cell.format.bold = true
  cell.format.background_color = '#D9EAF7'
end

workbook.save(output.to_s)
puts "Prepared PORIS ODS template: #{output}"
