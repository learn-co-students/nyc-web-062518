class Company < ApplicationRecord
  has_many :offices
  has_many :buildings, through: :offices
  has_many :employees

  validates :name, length: { minimum: 3 }

  accepts_nested_attributes_for :employees
end

# params -> {company: { employee: {name: }} }
