import { ADD_USER } from '../types';

 const initialUserState = {
   users: [],
   // currentUser
 };

export default function userReducer(state = initialUserState, action) {
   switch(action.type) {
     case ADD_USER:
       return { ...state, users: [...state.users, action.payload] };
     // case REMOVE_USER
     // case EDIT_USER
     default:
       return state;
   }
 }
