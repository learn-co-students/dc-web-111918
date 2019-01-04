class ApplicationController < ActionController::Base

    helper_method :current_user

    def current_user # MEMOIZATION
        if @current_user
            @current_user
        else
            if session[:user_id]
                @current_user = User.find(session[:user_id])
            else
                nil
            end
        end
    end

    def logged_in?
        !!current_user
    end

    def authorized
        if !logged_in?
            flash["notice"] = "You must be logged in"
            redirect_to login_path
        end
    end
end
