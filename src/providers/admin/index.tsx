import { ReactNode, useState } from "react"
import { AdminContext } from "./context"
import { useAppSession } from "../../services/appSessionStorage"
import { IAppSessionStorage } from "../../services/appSessionStorage/types"

export const AdminProvider = ({children}: {children: ReactNode}) => {
  const storage = useAppSession.getStorage()
  const [isLogged, setIsLogged]= useState<boolean>(storage?.isLogged? true: false)

  const login = (args: IAppSessionStorage) => {
    useAppSession.setStorage(args)
    setIsLogged(true)
  }

  const logout = ()=>{
    useAppSession.clearStorage()
    setIsLogged(false)
  }
  return (
   <AdminContext.Provider value={{isLogged, login, logout}}> {children} </AdminContext.Provider> 
  )
}