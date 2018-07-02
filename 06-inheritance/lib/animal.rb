class Animal


  attr_reader :name
  attr_accessor :mood


  def initialize(name)
    @name = name
    @mood = 'nervous'
  end

  def set_on_fire
    "fire!"
  end


end