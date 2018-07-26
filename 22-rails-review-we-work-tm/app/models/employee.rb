class Employee < ApplicationRecord
  belongs_to :company
  validates :title, presence: true
  validates :name, length: { minimum: 6 }
end
