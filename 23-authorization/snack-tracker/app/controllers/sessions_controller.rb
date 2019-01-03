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
        session["user_id"] = @user.id
        redirect_to snacks_path
    else
        flash.notice = "No user found with that name and password"
        redirect_to login_path
    end
  end

  def destroy
    # logs out user by deleting stored user cookie
    session.delete("user_id")
    redirect_to login_path
  end
end
