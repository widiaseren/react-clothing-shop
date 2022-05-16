import { createContext, useState, useEffect, useReducer } from "react";
import { 
  onAuthStateChangedListener,
  createUserDocumentFromAuth
} from '../utils/firebase/firebase.component';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
  // console.log('dispatched');
  // console.log(action);

  const { type, payload } = action;

  switch(type) {
    case 'SET_CURRENT_USER':
      return {
        ...state, //prev state
        currentUser: payload
      }
    default: 
      throw new Error(`Unhandled type ${type} in userReducer`);
  }

}

const INITIAL_STATE = {
  currentUser: null
}

export const UserProvider = ({children}) => {
  // const [ currentUser, setCurrentUser ] = useState(null); context ver
  const [ {currentUser}, dispatch ] = useReducer(userReducer, INITIAL_STATE); //state, dispatch - redux ver
  // console.log(currentUser)

  const setCurrentUser = (user) => {
    dispatch({
      type: USER_ACTION_TYPES.SET_CURRENT_USER,
      payload: user
    })
  }

  const value = { currentUser, setCurrentUser };

  // signOutUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => { 
      // console.log(user)
      if(user) createUserDocumentFromAuth()
      
      setCurrentUser(user)
    })
    return unsubscribe;
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}