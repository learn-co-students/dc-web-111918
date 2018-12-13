class ApplicationController < Sinatra::Base
    set :views, "app/views"
    set :method_override, true

    get "/" do 
        erb :home
    end

    get "/books" do # index
        @books = Book.all
        erb :index
    end

    post "/books" do 
        # create a new book
        # author = params[:author]
        # title = params[:title]
        # snippet = params[:snippet]
        # params = {title: "Cat in the Hat", author: "Dr Seuss", snippet: "some summary"}
        book = Book.create(params)
        redirect "/books/#{book.id}"
        # @books = Book.all
        # erb :index
        # erb :home
    end

    get "/books/new" do # new action
        erb :new
    end

    get "/books/:id" do # show
        id = params[:id]
        @book = Book.find(id)
        erb :show
    end

    get "/books/:id/edit" do
        @book = Book.find(params[:id])
        erb :edit
    end

    put "/books/:id" do 
        @book = Book.find(params[:id])

        @book.update(title: params[:title],
                     author: params[:author],
                     snippet: params[:snippet])
        redirect "/books/#{@book.id}" 
    end

    delete "/books/:id" do
        @book = Book.find(params[:id])
        @book.delete
        redirect "/books"
    end

end




