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
      projects = @project.self_and_descendants
      issues = Issue.visible(@user).where(project_id: projects.select(:id))
      relations = IssueRelation.where(issue_from_id: issues.select(:id))
                              .or(IssueRelation.where(issue_to_id: issues.select(:id)))
      # Include relation contents (they have no reliable updated_at), model
      # fields, hierarchy and visibility. Bulk reads avoid preview generation.
      tables = [projects, issues, relations, Tracker.all]
      rows = tables.map { |scope| scope.reorder(:id).pluck(*scope.klass.column_names) }
      Digest::SHA256.hexdigest(Marshal.dump([I18n.locale.to_s, rows]))
    end
  end
end
