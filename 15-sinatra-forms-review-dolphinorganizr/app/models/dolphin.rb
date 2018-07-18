class Dolphin < ActiveRecord::Base
  # inherting from AR base gives me methods like Dolphin.create, Dolphin.all, dolphin_instance.update etc
  # AR will also create an initialize method for me based on my schema
end
