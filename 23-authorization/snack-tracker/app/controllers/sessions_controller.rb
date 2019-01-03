class SessionsController < ApplicationController
  def new
    # load login form
    if current_user
      redirect_to snacks_path
    else
      render :new
    end
  end

  def create
    # store username as a cookie if username is valid
    username = params[:username]
    @user = User.find_by(username: username)

    if @user && @user.authenticate(params[:password])
        cookies["current_user"] = username
        redirect_to snacks_path
    else
        flash.notice = "No user found with that name and password"
        redirect_to login_path
    end
  end

  def destroy
    # logs out user by deleting stored user cookie
    cookies.delete("current_user")
    redirect_to login_path
  end
end
