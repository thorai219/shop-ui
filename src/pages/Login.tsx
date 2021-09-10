import { useState } from "react"
import axios, { AxiosResponse } from "axios"

const Login = () => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const login = async () => {
    await axios
      .post(
        "http://localhost:4000/login",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then(
        (res: AxiosResponse) => {
          if (res.status === 200) {
            window.location.href = "/"
          }
        },
        () => console.log("failure to log in")
      )
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={login}>Submit</button>
    </div>
  )
}

export default Login
