class Approach
  include Mongoid::Document
  store_in collection: "approach"
  field :idea  
  field :votes, type: Integer, default: 0
end