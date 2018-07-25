class CreatePizzerias < ActiveRecord::Migration[5.2]
  def change
    create_table :pizzerias do |t|
      t.string :name

      t.timestamps
    end
  end
end
