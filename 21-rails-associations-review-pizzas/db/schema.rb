ActiveRecord::Schema.define(version: 2018_07_25_182900) do

  create_table "pizzas", force: :cascade do |t|
    t.string "name"
    t.integer "pizzeria_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "tasty"
    t.index ["pizzeria_id"], name: "index_pizzas_on_pizzeria_id"
  end

  create_table "pizzerias", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_pizzas", force: :cascade do |t|
    t.integer "user_id"
    t.integer "pizza_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pizza_id"], name: "index_user_pizzas_on_pizza_id"
    t.index ["user_id"], name: "index_user_pizzas_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
