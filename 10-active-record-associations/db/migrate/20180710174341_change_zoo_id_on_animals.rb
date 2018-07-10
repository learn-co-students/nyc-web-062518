class ChangeZooIdOnAnimals < ActiveRecord::Migration[5.2]
  def change
    rename_column :animals, :zoo_id, :current_zoo_id
  end
end
