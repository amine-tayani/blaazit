import React from "react"
import Home from "./components/Home"
import { Route, Switch } from "react-router-dom"
import Login from "./components/Login/Login"
import SignUp from "./components/Signup/SignUp"

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  )
}

export default App
