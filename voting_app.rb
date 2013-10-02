require 'sinatra'
require 'mongo'
require 'mongoid'
require 'json/ext' # required for .to_json

include Mongo
Mongoid.load!("mongo.yml")

configure do
  set :mongo_db, 'binst'
end          

get '/' do
  send_file('public/index.html') 
end
              
get '/approach/list' do
  content_type :json                                  
  approaches = Approach.all;  
  approaches.to_json         
end

class Approach
  include Mongoid::Document
  store_in collection: "approach", database: "ghc13"
  field :idea
end

