import { useState } from "react"
import axios, { AxiosResponse } from "axios"

const Register = () => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const register = async () => {
    await axios
      .post(
        "http://localhost:4000/register",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          window.location.href = "/"
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <h1>Register</h1>
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
      <button onClick={register}>Submit</button>
    </div>
  )
}

export default Register
