class Person

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end


  def tickets
    # tickets is single source of truth on itself
    Ticket.all.select do |ticket|
      self == ticket.passenger
    end
  end


  def flights
    # tickets know which flights I'm on
    tickets.map do |ticket|
      ticket.flight
    end
  end

end