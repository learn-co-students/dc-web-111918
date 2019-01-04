class UsersController < ApplicationController
  def new
    cookies.delete("current_user")
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.valid?
        @user.save
        cookies["current_user"] = @user.username
        redirect_to snacks_path
    else
        render :new
    end
  end

  def new_favorites
    render :new_favorites
  end

  def create_favorites
    snack_ids = params[:snack_ids]
    snack_ids.each do |id|
      new_snack = Snack.find(id)
      if !current_user.snacks.include?(new_snack)
        current_user.snacks << new_snack
      end
    end
    redirect_to snacks_path
  end


  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)

  end
end
