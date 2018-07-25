class PizzasController < ApplicationController
  before_action :set_pizza, only: [:show, :destroy, :edit, :update]

  def index #show all pizzas
    @pizzas = Pizza.all #ask model for all pizzas to pass to view
    render :index # look in views/pizzas/index
  end

  def show
    render :show
  end

  def new #render form to create new pizza
    @pizza = Pizza.new
    render :new
  end

  def create #handle POST request sent from new form to /pizzas
    # Pizzeria.find_or_create_by(name: params[:pizza][:pizzeria_name])
    # /pizzas
    @pizza = Pizza.new(pizza_params)
    if @pizza.valid?
      @pizza.save
        redirect_to @pizza
        # redirect_to pizza_path(@pizza)
      else
        render :new
        # @pizzas = Pizza.all
        # render :index
    end
  end

  def edit #render edit form
    render :edit
    #code
  end

  def update #handle PATCH request to /pizzas/:id
    if @pizza.update(pizza_params)
      flash[:notice] = 'Pizza Updated'
      redirect_to @pizza
    else
      render :edit
    end
    #code
  end

  def destroy #HTTP DELETE request to /pizzas/:id
    # before action sets @pizza
    @pizza.destroy #tell model to remove from database
    flash[:notice] = 'Pizza destroyed'
    redirect_to pizzas_path
  end

  private

  def pizza_params
    params.require(:pizza).permit(:name, :pizzeria_id, :tasty)
  end

  def set_pizza
    @pizza = Pizza.find(params[:id])
  end

end
