module CosmosysPoris
  # Optional execution integrations consume the accepted runtime result. PORIS
  # itself has no knowledge of CAD, hardware or application-specific commands.
  module RuntimeExecutionAdapters
    def self.register(key, &adapter)
      raise ArgumentError, 'An adapter block is required' unless adapter
      (@adapters ||= {})[key.to_sym] = adapter
    end

    def self.call(**context)
      return {} unless context.fetch(:operations).all? { |operation| operation['accepted'] }
      (@adapters || {}).to_h { |key, adapter| [key.to_s, adapter.call(**context)] }
    end
  end
end
