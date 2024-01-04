import { ReactNode, useState } from "react"
import { AdminContext } from "./context"
import { useAppSession } from "../../services/appSessionStorage"
import { Api } from "../../services/Api"
import { validateResp } from "./types"

export const AdminProvider = ({children}: {children: ReactNode}) => {
  const storage = useAppSession.getStorage()
  const [isLogged, setIsLogged]= useState<boolean>(storage?.isLogged? true: false)

  const login = async (args: {email: string, password:string}) => {
    const isValid:validateResp = await Api.admin.validate(args).then()
    console.log(isValid)
    if(isValid.message === "Success"){
      useAppSession.setStorage({isLogged: true})
     
      return isValid.message
    }else {
      return isValid.message;
    }
  }

  const logout = ()=>{
    useAppSession.clearStorage()
    setIsLogged(false)
  }
  return (
   <AdminContext.Provider value={{isLogged, login, logout}}> {children} </AdminContext.Provider> 
  )
}