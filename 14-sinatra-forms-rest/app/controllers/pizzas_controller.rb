class PizzasController < ApplicationController

  get '/pizzas' do # i want to see all pizzas in my view
    @pizzas = Pizza.all # talk to model, which talks to db
    erb(:'pizza/index') # pass db data as ruby instances for the view to display
  end

# GET TO /users/new to render a form
# POST TO /users to create new user (sign up)

# as a user i want to ...
  post '/pizzas' do # i want to send data from a form that the application will use to create a new pizza
    @pizza =  Pizza.new(toppings: params['toppings'], price: params['price'])
    if @pizza.save
      redirect to "/pizzas/#{@pizza.id}"
    else
      redirect to '/pizzas/new'
    end
  end

  get '/pizzas/new' do # i want to see a form to create a new pizza
    erb :'pizza/new' # tell views to render new pizza form
  end

  get '/pizzas/:id/edit' do # i want to see a form to edit a pizza
    @pizza = Pizza.find(params[:id]) # controller will ask the model for the pizza with the corresponding id
    # /pizzas/10/edit -> params => {id: 10}
    erb :'/pizza/edit'
  end

  patch '/pizzas/:id' do
    @pizza = Pizza.find(params[:id])
    @pizza.update({price: params[:price], toppings: params[:toppings]})
    redirect to '/pizzas'
  end

  get '/pizzas/:id' do
    @pizza = Pizza.find(params[:id])
    erb :'pizza/show'
  end

end
