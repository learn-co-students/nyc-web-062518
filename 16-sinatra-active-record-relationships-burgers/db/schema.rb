ActiveRecord::Schema.define(version: 20180718193632) do

  create_table "burgers", force: :cascade do |t|
    t.string  "name"
    t.integer "restaurant_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name"
  end

end
