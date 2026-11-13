require_relative 'project_datum_reference'
require_relative 'spec_preview'
require 'digest'
require 'json'

module CosmosysPoris
  # Definitions associated by canonical identity, not uses in rendered prose.
  class AssociatedDatums
    def initialize(source, user: User.current)
      @source, @user = source, user
    end

    def entries
      raise ActiveRecord::RecordNotFound unless @source.visible?(@user) && @source.cosmosys_poris?

      preview = SpecPreview.new(@source, user: @user)
      definitions = ProjectDatumReference.properties(@source).keys.map { |property| preview.datum_definition(property) }
      by_key = definitions.index_by { |definition| definition.fetch(:key).downcase }
      Issue.visible(@user).joins(:tracker)
           .where(project_id: @source.project.root.self_and_descendants.select(:id))
           .where(trackers: { csys_item_kind: 'datum' })
           .where(Issue.arel_table[:csid].lower.in(by_key.keys))
           .includes(:project, :tracker).to_a
           .map { |item| { item: item, definition: by_key.fetch(item.csid.downcase) } }
           .sort_by { |entry| entry[:definition][:property] }
    end

    # Explicit, selected refresh; never called while rendering an item/report.
    def refresh(ids:, descriptions: false, expected: {})
      selected_ids = Array(ids).map(&:to_s).uniq
      raise ArgumentError, I18n.t('cosmosys_poris.datums.refresh_none') if selected_ids.empty?
      refreshed = []
      Issue.transaction(requires_new: true) do
        @source.lock!
        current = entries.index_by { |entry| entry[:item].id.to_s }
        raise ActiveRecord::RecordNotFound unless (selected_ids - current.keys).empty?
        selected_ids.sort.each do |id|
          entry = current.fetch(id)
          item, definition = entry.values_at(:item, :definition)
          item.lock!
          raise Unauthorized unless item.editable?(@user)
          stamp = expected[id]
          unless stamp.present? && stamp == fingerprint(entry)
            raise ArgumentError, I18n.t('cosmosys_poris.datums.refresh_stale')
          end
          item.init_journal(@user)
          item.subject = definition.fetch(:subject).truncate(255)
          item.description = description(definition) if descriptions
          item.notify = false
          item.save!
          refreshed << item
        end
      end
      refreshed
    end

    def fingerprint(entry)
      Digest::SHA256.hexdigest(JSON.generate([
        @source.id, @source.subject, @source.updated_on&.iso8601(6),
        entry[:item].id, entry[:item].subject, entry[:item].description,
        entry[:item].updated_on&.iso8601(6), entry[:definition]
      ]))
    end

    def description(definition)
      @source.project.with_cosmosys_locale do
        ProjectDatumReference.description(definition)
      end
    end
  end
end
