import axios, { AxiosResponse } from "axios"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { userContext } from "../../context/UserContext"

const Navbar = () => {
  const userCtx = useContext(userContext)

  const logout = () => {
    axios
      .get("http://localhost:4000/logout", { withCredentials: true })
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          window.location.href = "/"
        }
      })
  }

  return (
    <div className="nav">
      <Link to="/">Home</Link>
      {userCtx ? (
        <>
          {userCtx.isAdmin && <Link to="/admin">Admin</Link>}
          <Link to="/profile">Profile</Link>
          <Link onClick={logout} to="/logout">
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </div>
  )
}

export default Navbar
