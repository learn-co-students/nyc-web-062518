
ActiveRecord::Schema.define(version: 20180719175321) do

  create_table "actor_movies", force: :cascade do |t|
    t.integer "actor_id"
    t.integer "movie_id"
  end

  create_table "actors", force: :cascade do |t|
    t.string "name"
  end

  create_table "movies", force: :cascade do |t|
    t.string  "title"
    t.integer "year"
    t.integer "rating"
  end

end
