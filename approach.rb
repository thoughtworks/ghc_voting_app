class Approach
  include Mongoid::Document
  store_in collection: "approach", database: "ghc13"
  field :idea
end