/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-onchange */
import axios, { AxiosResponse } from "axios"
import { useContext, useEffect, useState } from "react"
import { userContext } from "../context/UserContext"
import { UserInterface } from "../interfaces/interface"

const AdminPage = () => {
  const userCtx = useContext(userContext)
  const [data, setData] = useState<UserInterface[]>()
  const [selectedUser, setSelectedUser] = useState<string>()

  useEffect(() => {
    axios
      .get("http://localhost:4000/getallusers", {
        withCredentials: true,
      })
      .then((res: AxiosResponse) => {
        setData(
          res.data.filter((user: UserInterface) => user.id !== userCtx.id)
        )
      })
  }, [userCtx])

  if (!data) return null

  const deleteUser = () => {
    axios.post(
      "http://localhost:4000/deleteuser",
      {
        id: selectedUser,
      },
      { withCredentials: true }
    )
  }

  return (
    <div>
      <h2>Admin Page</h2>
      <select
        onChange={(e) => setSelectedUser(e.target.value)}
        name="deleteuser"
        id="deleteuser"
      >
        <option id="Select a User">Select a User</option>
        {data.map((user: UserInterface) => (
          <option key={user.id} id={user.id} value={user.id}>
            {user.username}
          </option>
        ))}
      </select>
      <button onClick={deleteUser}>Delete User</button>
    </div>
  )
}

export default AdminPage
