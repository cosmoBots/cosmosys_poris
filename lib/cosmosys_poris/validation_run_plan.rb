require 'digest'
require 'securerandom'

module CosmosysPoris
  # Only the opaque run ID and next index enter the cookie session. The plan
  # lives in the server cache and is never rebuilt silently halfway through.
  class ValidationRunPlan
    class Expired < StandardError; end

    def initialize(project, user:, cache: Rails.cache)
      @project, @user, @cache = project, user, cache
    end

    def start
      revision = fingerprint
      steps = RubyCodePreview.new(@project, user: @user).render(include_code: false).validation_steps
      raise Expired, 'PORIS model changed while preparing validation. Restart Run.' unless revision == fingerprint

      id = SecureRandom.hex(24)
      @cache.write(key(id), { revision: revision, steps: steps }, expires_in: 2.hours)
      raise Expired, 'Validation plan could not be cached. Restart Run.' unless @cache.exist?(key(id))

      [id, steps]
    end

    def fetch(id)
      plan = @cache.read(key(id))
      unless plan && plan[:revision] == fingerprint
        delete(id)
        raise Expired, 'Validation plan expired or PORIS model changed. Restart Run.'
      end
      plan.fetch(:steps)
    end

    def delete(id)
      @cache.delete(key(id))
    end

    private

    def key(id)
      "cosmosys_poris/validation/v1/#{@user.id}/#{@project.id}/#{id}"
    end

    def fingerprint
      selection = Cosmosys::ViewAudienceSelector.for_project(
        @project, scope: :project_and_descendants, user: @user,
        relation_types: OptionRelations::ENABLEMENT_TYPES
      )
      issues = selection.audience_items
      relations = selection.relations + selection.boundary_relations
      # Include relation contents (they have no reliable updated_at), model
      # fields, hierarchy and visibility. The selector's records are already
      # loaded, so fingerprinting does not repeat project-tree discovery.
      trackers = Tracker.where(id: issues.map(&:tracker_id).uniq).order(:id).to_a
      rows = [selection.projects, issues, relations, trackers].map do |records|
        records.sort_by(&:id).map { |record| record.attributes.slice(*record.class.column_names) }
      end
      Digest::SHA256.hexdigest(Marshal.dump([I18n.locale.to_s, rows]))
    end
  end
end
