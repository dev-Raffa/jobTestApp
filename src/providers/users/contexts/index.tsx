import { createContext, useContext } from "react";
import { IUser, userAddArgs, userValidateResponse } from "../../../services/Api/types/users";


interface userContext {
    user?: IUser,
    //setUser: ()=> void,
    save: (args:userAddArgs)=> Promise<void>
    update: (id: number, args:IUser)=> Promise<void>
    validate: (args: userAddArgs)=> Promise<userValidateResponse['status']>
    logOut: ()=> void;
}

export const UserContext = createContext({} as userContext)

export const useUser = ()=> useContext(UserContext)