import { createContext, useReducer, useEffect } from "react"
import { useFirebase } from "../hooks/useFirebase"
import { auth } from "../base"
import { authReducer, initialState } from "../reducers/authReducer"

export const authContext = createContext()

export const AuthProvider = ({ children }) => {
  const { signup, login, logout } = useFirebase()
  const [state, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      user ? dispatch({ type: "SET_USER", user: user }) : dispatch({ type: "SET_USER", user: null })
    })
    return () => unsubscribe
  }, [])
  return (
    <authContext.Provider value={{ login, signup, logout, state, dispatch }}>
      {children}
    </authContext.Provider>
  )
}
