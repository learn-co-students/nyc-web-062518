class Animal < ActiveRecord::Base

  belongs_to :current_zoo, class_name: "Zoo"
  
  has_many :escapes

  has_many :zoos_escaped_from, through: :escapes, source: :zoo
  has_many :zoo_mates, through: :current_zoo, source: :animals
end