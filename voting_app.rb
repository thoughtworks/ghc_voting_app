require 'sinatra'
require 'mongo'
require 'mongoid'
require 'twitter'
require 'tweetstream'
require 'json/ext' # required for .to_json
require File.expand_path(File.dirname(__FILE__) + '/approach')

include Mongo                  
Mongoid.load!("mongo.yml")

get '/' do
  send_file('public/index.html') 
end
              
get '/approach' do
  content_type :json                                  
  approaches = Approach.all
  {:approaches => approaches}.to_json         
end

put '/approach' do
  content_type :json    
  params = JSON.parse(request.body.read)
    
  approach = Approach.find(params["_id"])
  approach.set(:votes, params["votes"])
  
  if approach.save                     
    Approach.all.to_json
  end                              
end