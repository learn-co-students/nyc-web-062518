class CreatePizzas < ActiveRecord::Migration
  def change
    create_table :pizzas do |t|
      t.string :toppings
      t.integer :price
    end
  end
end
