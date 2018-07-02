class Flight

  @@all = []

  def initialize(airline_name, flight_number)
    @airline_name = airline_name
    @flight_number = flight_number
    @@all << self
  end

  def tickets
    Ticket.all.select do |ticket|
      ticket.flight == self
    end
  end

  def passenger_manifest
    tickets.map do |ticket|
      ticket.passenger
    end
  end

end