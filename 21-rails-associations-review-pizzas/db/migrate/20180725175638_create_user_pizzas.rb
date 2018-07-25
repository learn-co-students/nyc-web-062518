class CreateUserPizzas < ActiveRecord::Migration[5.2]
  def change
    create_table :user_pizzas do |t|
      # reference creates foreign_key AND indexes that foreign_key for faster lookups in db
      t.references :user, foreign_key: true
      t.references :pizza, foreign_key: true

      t.timestamps
    end
  end
end
