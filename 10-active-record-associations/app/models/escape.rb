class Escape < ActiveRecord::Base
  belongs_to :zoo
  belongs_to :animal
end