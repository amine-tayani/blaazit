import React, { useEffect, useState } from "react"
import axios from "axios"
import { Route, Switch, useHistory } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Auth/Login/Login"
import SignUp from "./components/Auth/Signup/SignUp"
import userContext from "./context/authContext"

const App = () => {
  const history = useHistory()
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  })
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    })
    localStorage.clear()
    history.push("/login")
  }
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token")
      if (token === null) {
        localStorage.setItem("auth-token", "")
        token = ""
      }

      const tokenResponse = await axios.post("http://localhost:5000/api/users/tokenIsValid", null, {
        headers: { "x-auth-token": token },
      })
      if (tokenResponse.data) {
        const userResponse = await axios.get("http://localhost:5000/api/users/", {
          headers: { "x-auth-token": token },
        })
        setUserData({
          token,
          user: userResponse.data,
        })
      }
    }
    checkLoggedIn()
  }, [])
  return (
    <userContext.Provider value={{ userData, setUserData, logout }}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </userContext.Provider>
  )
}

export default App
