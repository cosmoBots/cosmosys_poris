module CosmosysPoris
  # Shared identity for the project variables used by specs and the runtime.
  module ProjectDatumReference
    def self.key(item, property)
      source = item.csid.presence || "POR_#{item.id}"
      "#{source.gsub(/[^A-Za-z0-9]+/, '_').gsub(/\A_+|_+\z/, '')}_#{property}"
    end
  end
end
