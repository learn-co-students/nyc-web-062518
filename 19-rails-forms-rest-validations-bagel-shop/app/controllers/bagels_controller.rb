class BagelsController < ApplicationController
  def index
    @bagels = Bagel.all
    render :index
  end

  def new
    @bagel = Bagel.new
    render :new
  end

  def create
    @bagel = Bagel.new(bagel_params)
    if @bagel.valid?
      @bagel.save
      flash[:notice] = 'Bagel created!'
      redirect_to(bagels_path)
    else
      render(:new)
    end
  end

private
  def bagel_params
    params.require(:bagel).permit(:name, :price, :tasty)
  end

end
