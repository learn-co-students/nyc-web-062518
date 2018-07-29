class NachosController < ApplicationController
  before_action :find_nacho, only: %i[show]

  def index
    @nachos = Nacho.all
  end

  def show; end

  private

  def find_nacho
    @nacho = Nacho.find(params[:id])
  end
end
