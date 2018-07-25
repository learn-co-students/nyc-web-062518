class Cow < ApplicationRecord
  validates(:name, {uniqueness: true})
  belongs_to :farmer
  # by default belongs_to will validate the presence and validity of the farmer that the cow belongs to
end
