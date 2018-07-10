class CreateZoos < ActiveRecord::Migration[5.2]
  def change
    create_table :zoos do |table|
      table.string :name
      table.integer :cost_of_admission
    end
  end
end
