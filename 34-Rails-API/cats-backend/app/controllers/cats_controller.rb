class CatsController < ApplicationController
  #GET all
  def index
    render json: Cat.all
  end

  #GET
  def show
    render json: {
      error: 'HAHA! NOT A ROUTE',
      cat: Cat.find(params[:id])
    }
  end

  #POST
  def create
    render json: Cat.create(cat_params)
  end

  #PATCH
  def update
    Cat.find(params[:id]).update(cat_params)
    render json: Cat.find(params[:id])
  end

  #DELETE
  def destroy
    render json: Cat.find(params[:id]).destroy
  end

  private
  def cat_params
    params.require(:cat).permit(:name, :fluffiness, :mean, :picture)
  end
end
