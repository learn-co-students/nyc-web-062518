require_relative "models/user"
require_relative "models/tweet"
require 'pry'

coffee_dad = User.new("Coffee Dad")
tequila_aunt = User.new("Tequila Aunt")

coffee_dad.post_tweet("Having coffee")
coffee_dad.post_tweet("#coffee")
coffee_dad.post_tweet("Life is suffering")

tequila_aunt.post_tweet("Lime and salt")

Pry.start
