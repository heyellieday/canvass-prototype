class UsersController < ApplicationController
    def create
    @user = User.new(user_params)
    if @user.save
        Digitalocean.client_id  = "63dd809ecea5e910df77f5a11e4b2dee"
        Digitalocean.api_key    = "3028f1fb01f9a42a1c51401a5f0e718b"
        Digitalocean::Droplet.create({:name => @user.username, :size_id => "66", :image_id => "3240036", :region_id => "4"})
      # Handle a successful save.
      sign_in @user
      flash[:success] = "Welcome to the Instapress!"
       redirect_to @user
    else
      render 'new'
    end
  end
    
  def user_params
        params.require(:user).permit(:name, :email, :username, :password,
                                   :password_confirmation)
  end
end

