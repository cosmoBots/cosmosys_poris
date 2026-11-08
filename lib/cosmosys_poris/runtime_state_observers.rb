module CosmosysPoris
  # Read-only projections of the committed runtime, independent of command
  # semantics. Observers must not actuate hardware or change the configuration.
  module RuntimeStateObservers
    def self.register(key, &observer)
      raise ArgumentError, 'An observer block is required' unless observer
      (@observers ||= {})[key.to_sym] = observer
    end

    def self.call(**context)
      (@observers || {}).to_h { |key, observer| [key.to_s, observer.call(**context)] }
    end
  end
end
