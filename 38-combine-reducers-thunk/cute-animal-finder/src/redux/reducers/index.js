import { combineReducers } from 'redux';
import userReducer from './userReducer';
import animalReducer from './animalReducer';

// both functions,
// an object,
// an array of reducers
export default combineReducers({
  user: userReducer,
  animal: animalReducer
})
