class SnacksController < ApplicationController

  before_action :find_snack, only: [:show, :edit, :update, :destroy]

  def index
    @snacks = Snack.all
  end

  def show
  end

  def new
    @snack = Snack.new
  end

  def create
    @snack = Snack.create(strong_params)
    redirect_to @snack
    # redirect_to snack_path(@snack)
  end

  def edit
  end

  def update
    @snack.update(strong_params)
    redirect_to @snack

  end

  def destroy
    @snack.destroy
    redirect_to snacks_path
  end

  private

  def strong_params
    params.require(:snack).permit(:name, :tastiness, :calories)
  end

  def find_snack
    @snack = Snack.find(params[:id])
  end

end
