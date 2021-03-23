import { createContext, useReducer } from 'react'
import { useFirebase } from '../hooks/useFirebase'
import { authReducer } from '../reducers/authReducer';

export const authContext = createContext()

const initialState = {
  user: {}
}


export const AuthProvider = ({ children }) => {
  const { signup, login, logout } = useFirebase();
  const [state, dispatch] = useReducer(authReducer, initialState)

  return (
    <authContext.Provider value={{
      login,
      signup,
      logout,
      state,
      dispatch
    }} >
      {children}
    </authContext.Provider>
  );
}


