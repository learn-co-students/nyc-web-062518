sergio = User.create(name: 'sergio')
nunzio = User.create(name: 'nunzio')
lil_caesars = Pizzeria.create(name: 'little caesars')
anchovy = Pizza.create(name: 'anchovy', pizzeria: lil_caesars)

# UserPizzas.create(user: sergio, pizza: anchovy)
# UserPizzas.create(user_id: sergio.id, pizza_id: anchovy.id)
sergio.pizzas << anchovy

anchovy.users << nunzio
