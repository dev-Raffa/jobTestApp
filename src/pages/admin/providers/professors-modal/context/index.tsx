import { createContext, useContext } from "react"

export interface contextModalProps{
    show: boolean;
    setShow: (arg: boolean)=>void
}

export const ProfessorsContextModal = createContext({} as contextModalProps)

export const useProfessorsModal = () => useContext(ProfessorsContextModal)