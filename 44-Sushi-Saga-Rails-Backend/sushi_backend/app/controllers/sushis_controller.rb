class SushisController < ApplicationController

    def index 
        # render({json: Sushi.all})
        render json: Sushi.all
    end


    def get_from_api
    
        # get data from third-party aka json-server
        url_to_fetch = "http://localhost:9090/sushis"
        response = RestClient.get(url_to_fetch)

        sushiArray = JSON.parse(response.body)

        render json: sushiArray
    end

    def get_four_sushi_starting_at_index
        # let rails app know what index to start at
        # rails app will send you the corersponding 4
        starting_index = params["starting_index"].to_i - 1
        last_index = starting_index + 3
        render json: Sushi.all[starting_index..last_index]
    end
end