import { createContext, useContext } from "react";
import { IAppSessionStorage } from "../../../services/appSessionStorage/types";

export interface IAdminContext {
  isLogged: boolean;
  login: (args:IAppSessionStorage) => void;
  logout: ()=> void;
}

export const AdminContext = createContext({} as IAdminContext)

export const useAdminContext = ()=> useContext(AdminContext)