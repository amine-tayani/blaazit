import { createContext, useEffect, useReducer } from "react"
import { useHistory } from "react-router-dom"
import authReducer from "../reducers/authReducer"
import { userInitialState } from "../store/store"
import axios from "axios"

const userContext = createContext(userInitialState)

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, userInitialState)

  const router = useHistory()

  const logout = () => {
    // set token and user to null
    dispatch({ type: "LOGOUT", user: null, token: null })
    localStorage.removeItem("auth-token")
    router.push("/login")
  }
  useEffect(() => {
    console.log(process.env.REACT_APP_API_SERVER)
    const checkLoggedIn = async () => {
      let accessToken = localStorage.getItem("auth-token")
      if (accessToken === null) {
        localStorage.setItem("auth-token", "")
        accessToken = ""
      }

      const tokenResponse = await axios.post(
        `${process.env.REACT_APP_API_SERVER}/users/tokenIsValid`,
        null,
        {
          headers: { "x-auth-token": accessToken },
        }
      )
      if (tokenResponse.data) {
        const userResponse = await axios.get(`${process.env.REACT_APP_API_SERVER}/users/`, {
          headers: { "x-auth-token": accessToken },
        })
        dispatch({ type: "CHECK_IF_IS_LOGGED", token: accessToken, user: userResponse.data })
      }
    }
    checkLoggedIn()
  }, [])
  return <userContext.Provider value={{ state, dispatch, logout }}>{children}</userContext.Provider>
}

export { userContext, UserProvider }
