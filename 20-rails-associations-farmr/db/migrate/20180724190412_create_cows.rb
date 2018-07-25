class CreateCows < ActiveRecord::Migration[5.2]
  def change
    create_table :cows do |t|
      t.string :name
      # create a foreign key on Cows called farmer_id
      # will also index farmer_id
      t.references :farmer, foreign_key: true

      t.timestamps
    end
  end
end
