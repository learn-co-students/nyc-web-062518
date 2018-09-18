const initialState = {
  pets: [
    { id: 1,
      name: 'Bubbles',
      age: 8,
      species: "chimpanzee",
      gb: true,
    },
    { id: 2,
      name: 'Ricky',
      age: 3,
      species: "dog-goldfish",
      gb: false,
    },
    { id: 3,
      name: 'Murderface',
      age: 700,
      species: "human-unknown-dolphin",
      gb: false,
    },
  ],
  currentPet: { id: 3,
    name: 'Murderface',
    age: 700,
    species: "human-unknown-dolphin",
    gb: false,
  },
}

export default function reducer(state = initialState, action) {
  console.log('reducer', state, action);

  switch(action.type) {
    case 'SELECT_PET':
      return { ...state, currentPet: action.payload }
    default:
      return state;
  }
}
