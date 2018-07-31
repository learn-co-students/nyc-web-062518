class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :delete]

  def new
    @user = User.new
    render :new
  end

  def show # /users/:id
    render :show
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      flash[:notice] = "Signup successful! Welcome, #{@user.username}"
      redirect_to @user
    else
      render :new
    end
  end

  def edit
    #code
    render :edit
  end

  def update
    #code
  end

  def delete
    byebug
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :profile_photo)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
