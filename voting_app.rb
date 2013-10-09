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
   
get '/addIdea' do
  send_file('public/addIdea.html') 
end   
              
get '/approach' do
  content_type :json                                  
  approaches = Approach.all
  {:approaches => approaches}.to_json         
end

post '/approach' do     
  content_type :json    
  params = JSON.parse(request.body.read)   
  approach = Approach.where(idea: params["idea"]).create
  approach.set(:tags, params["tags"])
  approach.save
end

put '/approach' do
  content_type :json    
  params = JSON.parse(request.body.read)
    
  approach = Approach.find(params["_id"])
  approach.set(:votes, params["votes"])
  
  if approach.save                     
    {:approaches => Approach.all}.to_json
  end                              
end