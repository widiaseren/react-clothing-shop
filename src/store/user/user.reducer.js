import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
  currentUser: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
  // console.log('dispatched');
  // console.log(action);

  const { type, payload } = action;

  switch(type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state, //prev state
        currentUser: payload
      }
    default: 
      // throw new Error(`Unhandled type ${type} in userReducer`);
      return state;
  }
}
