Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/self/sushis', to: 'sushis#index'
  get '/self/get-four/:starting_index', to: 'sushis#get_four_sushi_starting_at_index'

  get '/third-party/sushis', to: 'sushis#get_from_api'
end
