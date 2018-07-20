class DonutsController < ApplicationController
  def index
    byebug
    @donuts = Donut.all
  end

  def show
    @donut = Donut.find_by(id: params[:id])
  end
end
