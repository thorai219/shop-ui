/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios"
import { createContext, PropsWithChildren, useEffect, useState } from "react"
import { UserInterface } from "../interfaces/interface"

export const userContext = createContext<Partial<UserInterface>>({})

export default function Context(props: PropsWithChildren<any>) {
  const [user, setUser] = useState<UserInterface>()

  useEffect(() => {
    axios
      .get("http://localhost:4000/user", { withCredentials: true })
      .then((res: AxiosResponse) => {
        setUser(res.data)
      })
  }, [])

  return (
    <userContext.Provider value={user!}>{props.children}</userContext.Provider>
  )
}
