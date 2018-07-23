class BagelsController < ApplicationController
  # rails will infer i want to render index when at /bagels

  # show ALL bagels
  def index
    @bagels = Bagel.all
    render :index
  end

  # show form to create a new bagel
  def new
    @bagel = Bagel.new
    render :new
  end

# POST request from our new bagel form
  def create
    # pass in return value of private bagel_params method, which is a hash of whitelisted attributes
    @bagel = Bagel.new(bagel_params)
    # checking validations; method is provided by ActiveRecord
    if @bagel.valid?
      # if bagel is valid, save to database
      @bagel.save
      redirect_to(bagels_path)
    else # if bagel is not valid
      # rails provides a method for sending data across multiple requests
      # we can access this via flash[:KEY] hash syntax
      flash[:errors] = @bagel.errors.full_messages
      # display error message

      # because I am not redirecting, instance var @bagel maintains the attributes from the form
      render(:new) # render DOES NOT TRIGGER NEW GET REQUEST
    end
  end

#everything below private keyword is private
private
  def bagel_params
    # return a hash of whitelisted attributes from params
    params.require(:bagel).permit(:name, :price, :tasty)
  end

end
