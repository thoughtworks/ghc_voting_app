class Approach
  include Mongoid::Document
  store_in collection: "approach", database: "ghc13"
  field :idea  
  field :votes, type: Integer, default: 0
end