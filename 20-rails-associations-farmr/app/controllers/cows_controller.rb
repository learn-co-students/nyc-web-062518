class CowsController < ApplicationController
  before_action :set_cow, only: [:show, :edit, :update]

  def new #render a form that will POST to /cows
    # /cows/new
    @cow = Cow.new
    @farmers = Farmer.all
    render :new
  end

  def show
    # before action will call set_cow
    render :show
  end

  def create #handles the POST send by the new form
    @cow = Cow.new(cow_params)
    if @cow.valid?
      @cow.save
      # redirect_to cow_path(@cow)
      redirect_to @cow
    else
      render :new
      # render partial: "form"
    end
  end

  def edit
    # /cows/:id/edit
    # before action will call set_cow
    render :edit
  end

  def update
    if @cow.update(cow_params)
      redirect_to @cow
    else
      render :edit
    end
  end

  private
  def cow_params
    params.require(:cow).permit(:name, :farmer_id)
  end

  def set_cow
    @cow = Cow.find(params[:id])
  end
end
