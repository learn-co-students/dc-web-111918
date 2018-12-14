Rails.application.routes.draw do
  resources :students, only: [:edit, :show, :update, :create, :destroy, :new]

  # resources :students, only: [:index,:edit]
  get '/students', to: "students#index"
  # get '/students/:id', to: "students#show"
  # get '/students/:id/new', to: "students#new"
  # post '/students', to: "students#create"
  # post '/students/:id/delete', to: "students#delete"
  # post '/students/:id', to: 'students#update'
  # # get '/students/:id', to: 'controller#action(method)'
  # get '/students/:id/edit', to: 'students#edit'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
