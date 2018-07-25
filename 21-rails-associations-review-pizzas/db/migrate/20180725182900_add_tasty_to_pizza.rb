class AddTastyToPizza < ActiveRecord::Migration[5.2]
  def change
    # add a column to the pizzas table called tasty that will be a boolean
    add_column :pizzas, :tasty, :boolean
  end
end
