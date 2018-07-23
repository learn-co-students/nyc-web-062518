class CreateBagels < ActiveRecord::Migration[5.2]
  def change
    create_table :bagels do |t|
      t.string :name
      t.integer :price
      t.boolean :tasty

      t.timestamps
    end
  end
end
