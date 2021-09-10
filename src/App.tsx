import { useContext } from "react"
import { Switch, Route } from "react-router-dom"

import Navbar from "./components/navbar/Navbar"
import HomePage from "./pages/HomePage"
import AdminPage from "./pages/AdminPage"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { userContext } from "./context/UserContext"

export const App = () => {
  const userCtx = useContext(userContext)

  return (
    <>
      <Navbar />
      <Switch>
        {userCtx ? (
          <>
            {userCtx.isAdmin && (
              <Route path="/admin" render={() => <AdminPage />} />
            )}
            <Route path="/profile" render={() => <Profile />} />
          </>
        ) : (
          <>
            <Route path="/login" render={() => <Login />} />
            <Route path="/register" render={() => <Register />} />
          </>
        )}
        <Route path="/" exact render={() => <HomePage />} />
      </Switch>
    </>
  )
}
