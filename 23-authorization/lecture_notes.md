- `rails g migration CreateJoinTableSnacksUser snack user`

- `has_and_belongs_to_many on snacks/users`


- form:

```rb
<h1>Choose Your Favorites</h1>

<%= form_tag favorites_path do %>
    <% Snack.all.each do |s| %>
        <div>
            <%= check_box_tag "snack_ids[]", s.id %>
            <%= s.name %>
        </div>
    <% end %>
    <%= submit_tag "Submit" %>
<% end %>

```

- UsersController
```rb
def new_favorites
  render :favorite_picker
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
```

- SnacksController
```rb

  def index
    @snacks = current_user.snacks
  end
```

- Log in code

```rb
if session[:user_id]
  @user = User.find(session[:user_id])
  @songs = @user.songs
else
  @songs = Song.all # or force a login
end
```

Works but will be repetitive:
```rb
  def new
    if current_user
      @snack = Snack.new
    else
      redirect_to login_path
    end
  end
  ```

Add to application_controller:
```rb
    def logged_in?
        !!current_user
    end

    def authorized
      redirect_to login_path unless logged_in?
    end
  ```