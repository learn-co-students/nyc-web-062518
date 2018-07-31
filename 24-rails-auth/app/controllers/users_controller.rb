class UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def show # /users/:id
    @user = User.find(params[:id])
    render :show
  end

  def create
    @user = User.create(user_params)
    flash[:notice] = "Signup successful! Welcome, #{@user.username}"
    redirect_to @user
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
