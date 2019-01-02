class DogsController < ApplicationController


  def index
    @dogs = Dog.all
    # render 'views/classname/method.html.erb'
  end

  def show
     @dog = Dog.find(params[:id])

  end

end
