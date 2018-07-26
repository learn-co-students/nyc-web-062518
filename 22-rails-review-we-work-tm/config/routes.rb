Rails.application.routes.draw do
  resources :buildings, only: [:index, :show]
  resources :companies, only: [:new, :create, :edit, :update]
end
