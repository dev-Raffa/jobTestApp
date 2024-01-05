import { ReactNode, useState } from "react"
import { UserContext } from "./contexts"
import { IUser, userAddArgs, userValidateArgs, userValidateResponse } from "../../services/Api/types/users"
import { Api } from "../../services/Api"
import { useAppLocal } from "../../services/localStorage"

export const UserProvide = ({children}: {children: ReactNode}) => {
    const[user, setUser ]=useState<IUser>()
    const save = async(args:userAddArgs)=>{
        await Api.users.save(args).then((resp)=> resp.json()).then(resp=> setUser(resp));
        useAppLocal.setStorage({isLogged: true})
    }
    const update = async(id: number, args:IUser) => {
        await Api.users.update(id, args).then((resp)=> resp.json()).then(resp=> setUser(resp));
    }

    const validate = async(args:userValidateArgs)=>{
       const resp:userValidateResponse = await Api.users.validate(args).then((resp)=> resp.json()).then((resp)=> resp);
       
       if(resp.status>=200 && resp.status<=299){
            resp.user && setUser(resp.user)
            useAppLocal.setStorage({isLogged: true})
       }
       return resp.status
    }
    const logOut = ()=>{
        useAppLocal.clearStorage()
    }
    return(
        <UserContext.Provider value={{ user,save, update, validate, logOut}}>
            {children}
        </UserContext.Provider>
 )
}