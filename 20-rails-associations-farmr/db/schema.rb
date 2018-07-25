
ActiveRecord::Schema.define(version: 2018_07_24_190412) do

  create_table "cows", force: :cascade do |t|
    t.string "name"
    t.integer "farmer_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["farmer_id"], name: "index_cows_on_farmer_id"
  end

  create_table "farmers", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
