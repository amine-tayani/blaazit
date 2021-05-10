import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { UserProvider } from "./context/authContext"
import { BrowserRouter as Router } from "react-router-dom"
import "./assets/style.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <App />
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
