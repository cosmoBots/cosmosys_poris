require 'securerandom'

module CosmosysPoris
  class RuntimeSessionStore
    def initialize(session, user:, cache: Rails.cache)
      @session, @user, @cache = session, user, cache
    end

    def read
      id = @session[:cosmosys_poris_runtime_id]
      id ? (@cache.read(key(id)) || {}) : {}
    end

    def write(states)
      id = @session[:cosmosys_poris_runtime_id] || SecureRandom.hex(24)
      unless @cache.write(key(id), states, expires_in: 24.hours)
        raise 'Unable to cache PORIS session state'
      end
      @session[:cosmosys_poris_runtime_id] = id
    end

    def migrate_legacy!
      states = @session[:cosmosys_poris_runtime_state]
      return unless states.is_a?(Hash)

      write(read.merge(states))
      @session.delete(:cosmosys_poris_runtime_state)
    end

    private

    def key(id)
      "cosmosys_poris/runtime/v1/#{@user.id}/#{id}"
    end
  end

  # Migrate on any page, including rebuild redirects whose flash would push
  # an existing large PORIS cookie beyond the browser's size limit.
  module RuntimeSessionMigration
    extend ActiveSupport::Concern
    included do
      before_action :cosmosys_poris_migrate_runtime_session
    end

    private

    def cosmosys_poris_migrate_runtime_session
      RuntimeSessionStore.new(session, user: User.current).migrate_legacy!
    end
  end
end
