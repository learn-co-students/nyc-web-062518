class Zoo < ActiveRecord::Base
  has_many :animals, foreign_key: :current_zoo_id
  has_many :escapes
end