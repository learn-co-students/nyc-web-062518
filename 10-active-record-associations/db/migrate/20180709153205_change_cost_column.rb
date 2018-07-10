class ChangeCostColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :zoos, :cost_of_admission, :cost
  end
end
