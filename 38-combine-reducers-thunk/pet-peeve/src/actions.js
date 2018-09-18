
export function adoptPet(pet) {
  return {
    type: 'REMOVE_PET',
    payload: pet,
  }
}

export function likePet(pet) {
  return {
    type: 'LIKE_PET',
    payload: pet,
  }
}

export function selectPet(pet) {
  return {
    type: 'SELECT_PET', // OPEN_PROFILE, CHANGE_PROFILE, CHANGE_DISPLAY_PET
    payload: pet,
  }
}
