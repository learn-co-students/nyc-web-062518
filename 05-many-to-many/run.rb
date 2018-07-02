require_relative './models/flight.rb'
require_relative './models/ticket.rb'
require_relative './models/person.rb'
require 'pry'

ua_232 = Flight.new("United", 232)
jb_128 = Flight.new("JetBlue", 128)
delta_222 = Flight.new("Delta", 222)

graham = Person.new("Graham")
pope = Person.new("Jorge Mario Bergoglio")
grace = Person.new("Grace Hopper")


Ticket.new(graham, ua_232, "6D", true)
Ticket.new(graham, jb_128, "5A", false)
Ticket.new(pope, delta_222, "5A", true)
foo = Ticket.new(grace, ua_232, "6F", true)

binding.pry

true

