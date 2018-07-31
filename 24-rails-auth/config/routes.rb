Rails.application.routes.draw do
  resources :users
  # get '/signup', to: 'users#new', as: 'signup'
  resources :sessions, only: [:new, :create, :destroy]
end
