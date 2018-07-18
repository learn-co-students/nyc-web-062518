class BurgersController < ApplicationController

  get '/burgers/new' do
    # user wants to see a form for a new burger
    @restaurants = Restaurant.all # i need to ask the model for all of the existing restaurants
    erb :'burgers/new' # render said form (HTML)
  end

  post '/burgers' do
    @burger = Burger.create(params)
    redirect to "/restaurants/#{@burger.restaurant_id}"
    # /restaurants/3
  end

end
