Rails.application.routes.draw do
  resources :users, only: [:new, :create, :show]
  # get '/signup', to: 'users#new', as: 'signup'
  resources :sessions, only: [:new, :create]
end
