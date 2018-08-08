// PRETEND THIS IS COMING FROM OUR SERVER; THE ONLY WAY TO ACCESS IS VIA HTTP GET REQUEST
const pokemon = [
  {
    height: 10,
    weight: 130,
    order: 2,
    name: 'ivysaur',
    sprites: {
      front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png'
    }
  },
  {
    height: 20,
    weight: 1000,
    order: 3,
    name: 'venusaur',
    sprites: {
      front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
      back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png'
    }
  },
  {
    height: 6,
    weight: 85,
    order: 5,
    name: 'charmander',
    sprites: {
      front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png'
    }
  },
  {
    height: 11,
    weight: 190,
    order: 6,
    name: 'charmeleon',
    sprites: {
      front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
      back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png'
    }
  },
  {
    height: 17,
    weight: 905,
    order: 7,
    name: 'charizard',

    sprites: {
      front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png'
    }
  },
  {
    height: 5,
    weight: 90,
    order: 10,
    name: 'squirtle',

    sprites: {
      front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
      back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png'
    }
  },
  {
    height: 10,
    weight: 225,
    order: 11,
    name: 'wartortle',
    sprites: {
      front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
      back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png'
    }
  },
  {
    height: 16,
    weight: 855,
    order: 12,
    name: 'blastoise',
    sprites: {
      front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
      back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png'
    }
  }
]

function filterNames(pokemon) {
  // pokemon will refer to each pokemon object while map is running
  console.log('CALLING FILTER NAMES')
  return pokemon.name
}

const allNamesMappedWithNamedFn = pokemon.map(filterNames)

///Name Filter implemented with anonymous fn
const allNamesMappedWithAnonFn = pokemon.map(function(pokemon) {
  console.log('CALLING THE ANONYMOUS FUNCTION')
  return pokemon.name
})

/******************************************************************************/
function diyMap(arr, callback) {
  const mappedArr = []
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i]
    const mappedElement = callback(currentElement)
    mappedArr.push(mappedElement)
  }
  return mappedArr
}
/******************************************************************************/
// map using new es6 arrow function
const mappedPokemonArrow = pokemon.map(pokemon => pokemon.name)
/******************************************************************************/

class Pokemon {
  constructor(JSONPokemonData) {
    this.name = JSONPokemonData.name
    this.weight = JSONPokemonData.weight
    this.order = JSONPokemonData.order
  }

  attack() {
    return `${this.name} is attacking`
  }

  renderPokemon() {
    // RETURN SOME HTML TO VIEW THIS POKEMON
  }
}

const allPokemonObjects = pokemon.map(JSONPokemonData => new Pokemon(JSONPokemonData))

/******************************************************************************/
function grabByWeight(weight) {
  // pokeFilter and all fns below have access to weight
  return function pokeFilter(pokemon) {
    return pokemon.filter(p => p.weight < weight)
  }
}

/*****************************************************************************/
/*********************ARROW FUNCTIONS AND THIS********************************/
/*****************************************************************************/

const person = {
  name: 'tiny',
  greet: function() {
    console.log('THIS INSIDE OF GREET, ', this)
    return () => {
      return this
    }
  }
}

console.log(person.greet()()) // person

const personTwo = {
  name: 'large',
  greet: function() {
    console.log('THIS INSIDE OF GREET, ', this)
    return function() {
      return this
    }
  }
}

console.log(personTwo.greet()()) // window
