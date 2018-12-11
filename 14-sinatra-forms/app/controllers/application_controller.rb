class ApplicationController < Sinatra::Base
    set :views, "app/views"

    get "/" do 
        erb :home
    end

    get "/books" do 
        @books = Book.all
        erb :index
    end

    get "/books/:id" do 
        id = params[:id]
        @book = Book.find(id)
        erb :show
    end
end
