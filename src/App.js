import { Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/auth/Login/Login"
import SignUp from "./components/auth/Signup/SignUp"
import { UserProvider } from "./context/authContext"

const App = () => {
  return (
    <UserProvider>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </UserProvider>
  )
}

export default App
