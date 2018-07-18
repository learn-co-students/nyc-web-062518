ActiveRecord::Schema.define(version: 20180718151757) do

  create_table "dolphins", force: :cascade do |t|
    t.string  "name"
    t.integer "age"
  end

end
