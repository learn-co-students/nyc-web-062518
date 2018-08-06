# scope review in Ruby
NAME = 'john'.freeze
local_name = 'jimmy'

def say_name
  # puts local_name undefined local variable or method
  puts NAME # i can read a global constant
end

say_name

class Person; end # Person is considered to be a constant

puts flamingo # cannot attempt to reference a variable before its declared and assigned
flamingo = 'flamingo'

[1, 2, 3].each { |num| puts num } # this block will be run for each element in the array
