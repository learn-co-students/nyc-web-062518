class MoviesController < ApplicationController
  # render a form to EDIT a movie
  get '/movies/:id/edit' do
    # which movie do I want to edit
    @movie = Movie.find(params[:id])
    erb :'/movies/edit'
  end

  # EDIT that movie in my DB
  patch '/movies/:id' do
    binding.pry
  end

end
