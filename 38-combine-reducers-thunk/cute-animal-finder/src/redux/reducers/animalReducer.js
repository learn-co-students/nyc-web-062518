import { UPDATE_ANIMAL } from '../types';

const initialAnimalState = {
  animalSrc: null,
  // liked
  // disliked
};

export default function animalReducer(state = initialAnimalState, action) {
  switch(action.type) {
    case UPDATE_ANIMAL:
      return { ...state, animalSrc: action.payload };
    // case EMAIL_PICTURE
    // case LIKE_ANIMAL
    default:
      return state;
  }
}
