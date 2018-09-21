import UUID from 'uuid';
import { ADD_USER, UPDATE_ANIMAL } from './types';
import AnimalAdapter from '../apis/AnimalAdapter';

export function addUserAction(name, email, animalPreference) {
  return {
    type: ADD_USER,
    payload: { id: UUID(), name, email, animalPreference }
  }
}

export function updateAnimalAction(src) {
  return {
    type: UPDATE_ANIMAL,
    payload: src,
  }
}

export function fetchedCatActionBad() {
  AnimalAdapter.getCat()
    .then(url => {
      // dispatch(updateAnimalAction(url))
      return updateAnimalAction(url)
      // how can we return an object { type, payload } so we can dispatch it
    })
}

export function fetchedCatAction() {
  return (dispatch) => {
    dispatch({ type: 'FETCHING_ANIMAL' })
    AnimalAdapter.getCat()
      .then(url => {
        dispatch(updateAnimalAction(url))
        dispatch({ type: 'FETCHED_ANIMAL' })
      })
  }
  // AnimalAdapter.getCat()
  //   .then(url => {
  //     // dispatch(updateAnimalAction(url))
  //     return updateAnimalAction(url)
  //     // how can we return an object { type, payload } so we can dispatch it
  //   })
}
