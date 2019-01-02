class SessionsController < ApplicationController
  def new
    # load login form
  end

  def create
    # store username as a cookie if username is valid
    username = params[:username]
    @user = User.find_by(username: username)

    if @user 
        cookies["current_user"] = username
        redirect_to snacks_path
    else
        flash.notice = "No user found with that name"
        redirect_to login_path
    end
  end

  def destroy
    # logs out user by deleting stored user cookie
    cookies.delete("current_user")
    redirect_to login_path
  end
end
