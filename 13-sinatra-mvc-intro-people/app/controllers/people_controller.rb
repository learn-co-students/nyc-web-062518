class PeopleController < ApplicationController
  get '/people' do
    @people = Person.all
    erb :'people/index'
  end

  get '/people/:id' do
    # if url is /people/5 params => { id: '5' }
    @person = Person.find(params[:id])
    erb :'people/show'
  end
end
