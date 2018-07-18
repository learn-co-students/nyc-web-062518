class DolphinsController < ApplicationController

  get '/dolphins' do
    @all_dolphins = Dolphin.all
    erb :'dolphins/index'
  end

  get '/dolphins/:id/edit' do
    @dolphin = Dolphin.find(params[:id])
    erb :'dolphins/edit'
  end

  patch '/dolphins/:id' do
    @dolphin = Dolphin.find(params[:id])
    @dolphin.update({name: params[:name], age: params[:age]})
    redirect to '/dolphins'
  end

end
