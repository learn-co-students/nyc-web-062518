Rails.application.routes.draw do
  # get "/donuts", to: "donuts#index"
  # get "/donuts/new", to: "donuts#new", as: "new_donut"
  # get "/donuts/:id", to: "donuts#show", as: "donut"
  # post "/donuts", to: "donuts#create"
  # get "/donuts/:id/edit", to: "donuts#edit", as: "edit_donut"
  # patch "/donuts/:id", to: "donuts#update"
  # delete "/donuts/:id", to: "donuts#destroy"

  #resources :donuts

  resources :donuts, only: [:index, :show]
end
