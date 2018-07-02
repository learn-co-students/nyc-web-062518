require_relative "./animal.rb"
require 'pry'

class Cat < Animal


  def initialize(name)
    super(name)
    @num_lives = 9
  end


end
