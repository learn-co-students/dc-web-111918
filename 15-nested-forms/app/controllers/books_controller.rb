class BooksController < ApplicationController

    set :views, "app/views/books"

    get "/books" do # index
        @books = Book.all
        erb :index
    end

    post "/books" do 
        book = Book.create(params)
        redirect "/books/#{book.id}"
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
        binding.pry
        author = Author.find_by(name: params[:author])
        @book.update(title: params[:title],
                     author: author,
                     snippet: params[:snippet])
        redirect "/books/#{@book.id}" 
    end

    delete "/books/:id" do
        @book = Book.find(params[:id])
        @book.delete
        redirect "/books"
    end
end