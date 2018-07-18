class DolphinsController < ApplicationController

  get '/dolphins' do
    @all_dolphins = Dolphin.all
    erb :'dolphins/index'
  end

  get '/dolphins/:id/edit' do
    @dolphin = Dolphin.find(params[:id])
    erb :'dolphins/edit'
  end

  get '/dolphins/new' do # sinatra is checking url == '/dolphins/new'
  end

  get '/dolphins/:id' do
    @dolphin = Dolphin.find(params[:id])
    erb :'dolphins/show'
  end

  patch '/dolphins/:id' do
    @dolphin = Dolphin.find(params[:id])
    @dolphin.update({name: params[:name], age: params[:age]})
    redirect to "/dolphins/#{@dolphin.id}"
  end

  delete '/dolphins/:id' do
    dolphin = Dolphin.find(params[:id]) # since this is not going to the view, i do not need an instance var
    dolphin.destroy
    redirect to '/dolphins' # redirect should be to relative URL which will trigger a new GET request
  end

end
