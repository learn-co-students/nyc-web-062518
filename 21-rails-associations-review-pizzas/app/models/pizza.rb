class Pizza < ApplicationRecord
  belongs_to :pizzeria
  has_many :user_pizzas
  has_many(:users, { through: :user_pizzas })

  validates :name, { uniqueness: { case_sensitive: false } }
end
