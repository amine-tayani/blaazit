import { createContext, useEffect, useReducer } from "react"
import { useHistory } from "react-router-dom"
import { userInitialState } from "../store/store"
import Cookies from "universal-cookie"
import authReducer from "../reducers/authReducer"
import axios from "axios"

const userContext = createContext(userInitialState)

const UserProvider = ({ children }) => {
  const cookies = new Cookies()
  const [state, dispatch] = useReducer(authReducer, userInitialState)

  const router = useHistory()

  const logout = () => {
    // set token and user to null
    dispatch({ type: "LOGOUT", user: null, token: null })
    dispatch({ type: "CHECK_IF_IS_LOGGED", auth: false })
    cookies.remove("auth-token")
    router.push("/login")
  }
  useEffect(() => {
    const checkLoggedIn = async () => {
      let accessToken = cookies.get("auth-token")
      if (accessToken === null) {
        dispatch({
          type: "CHECK_IF_IS_LOGGED",
          token: accessToken,
          auth: false,
        })
        cookies.set("auth-token", "")
        accessToken = ""
      }

      const tokenResponse = await axios.post("http://localhost:5000/api/users/tokenIsValid", null, {
        headers: { "x-auth-token": accessToken },
      })
      if (tokenResponse.data) {
        const userResponse = await axios.get("http://localhost:5000/api/users/", {
          headers: { "x-auth-token": accessToken },
        })
        dispatch({
          type: "CHECK_IF_IS_LOGGED",
          token: accessToken,
          user: userResponse.data,
          auth: true,
        })
      }
    }
    checkLoggedIn()
  }, [])
  return <userContext.Provider value={{ state, dispatch, logout }}>{children}</userContext.Provider>
}

export { userContext, UserProvider }
