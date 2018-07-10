

# ApiWrapper.get_books("Ursula K. LeGuin").each do |book|
#   book = Book.new(book)
#   book.save
# end

bronx = Zoo.create(name: "Bronx Zoo", cost: 15)
brookfield = Zoo.create(name: "Brookfield Zoo", cost: 25)
san_diego = Zoo.create(name: "San Diego Zoo", cost: 30)


yurtle = Animal.create(name: "Yurtle", species: "Turtle", zoo_id: bronx.id)
bugs = Animal.create(name: "Bugs", species: "Rabbit", zoo_id: brookfield.id)
daffy = Animal.create(name: "Daffy", species: "Duck", zoo_id: san_diego.id)


Escape.create(animal_id: yurtle.id, zoo_id: san_diego.id)
Escape.create(animal_id: yurtle.id, zoo_id: brookfield.id)

Escape.create(animal_id: bugs.id, zoo_id: brookfield.id)
Escape.create(animal_id: bugs.id, zoo_id: bronx.id)
Escape.create(animal_id: bugs.id, zoo_id: brookfield.id)

Escape.create(animal_id: daffy.id, zoo_id: brookfield.id)
Escape.create(animal_id: daffy.id, zoo_id: san_diego.id)
