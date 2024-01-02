import { createContext, useContext } from "react";


export interface IAdminContext {
  isLogged: boolean;
  login: (args:{email:string, password: string}) => Promise<string| undefined>;
  logout: ()=> void;
}

export const AdminContext = createContext({} as IAdminContext)

export const useAdminContext = ()=> useContext(AdminContext)