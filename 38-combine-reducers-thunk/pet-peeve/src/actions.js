
export function adoptPetAction(pet) {
  return {
    type: 'REMOVE_PET',
    payload: pet,
  }
}

export function likePetAction(pet) {
  return {
    type: 'LIKE_PET',
    payload: pet,
  }
}

export function selectPetAction(pet) {
  return {
    type: 'SELECT_PET', // OPEN_PROFILE, CHANGE_PROFILE, CHANGE_DISPLAY_PET
    payload: pet,
  }
}
