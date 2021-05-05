import { useContext } from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/auth/Login/Login"
import SignUp from "./components/auth/Signup/SignUp"
import { userContext } from "./context/authContext"
import Spinner from "./components/shared/Spinner"

const App = () => {
  const { state } = useContext(userContext)
  if (state.loading) return <Spinner />

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  )
}

export default App
