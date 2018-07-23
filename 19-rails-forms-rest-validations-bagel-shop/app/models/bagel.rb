class Bagel < ApplicationRecord
  validates(:name, {presence: true})
end
