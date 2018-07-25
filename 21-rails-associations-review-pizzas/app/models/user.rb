class User < ApplicationRecord
  has_many :user_pizzas
  has_many :pizzas, through: :user_pizzas
end
