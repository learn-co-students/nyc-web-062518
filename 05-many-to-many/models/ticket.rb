class Ticket

  @@all = []

  attr_reader :passenger, :flight

  def initialize(passenger, flight, seat, refundable)
    @passenger = passenger
    @flight = flight
    @seat = seat
    @refundable = refundable
    @@all << self
  end

  def self.all
    @@all
  end

end