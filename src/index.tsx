import ReactDOM from "react-dom"
import { App } from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import "./styles/_main.scss"
import UserContext from "./context/UserContext"

ReactDOM.render(
  <Router>
    <UserContext>
      <App />
    </UserContext>
  </Router>,
  document.getElementById("root")
)
