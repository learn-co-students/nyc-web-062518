class RestaurantsController < ApplicationController

  get '/restaurants' do
    # talk to the model to get all of the restaurants
    @restaurants = Restaurant.all
    erb :'restaurants/index'
  end

  get '/restaurants/:restaurant_id' do
    @restaurant = Restaurant.find(params[:restaurant_id]) # talk to the model and find the restaurant instance based on the id found in params
    erb :'restaurants/show' # display the html for our user
  end
end
