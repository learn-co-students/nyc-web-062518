class CreateDolphins < ActiveRecord::Migration
  def change
    create_table :dolphins do |table|
      table.string :name
      table.integer :age
    end
  end
end
