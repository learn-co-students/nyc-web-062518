class SessionsController < ApplicationController

  def new # renders form to create a new session
    # new session means user is LOGGED IN
    #code
    render :new
  end

  def create # creates a new session
    byebug
    #code
  end
end
