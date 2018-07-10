class CreateEscapes < ActiveRecord::Migration[5.2]
  def change
    create_table :escapes do |t|
      t.integer :animal_id
      t.integer :zoo_id
    end
  end
end
