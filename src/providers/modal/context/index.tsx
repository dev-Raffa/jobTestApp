import { createContext, useContext } from "react"

export interface contextModalProps{
    show: boolean;
    setShow: (arg: boolean)=>void
}

export const ContextModal = createContext({} as contextModalProps)

export const useModal = () => useContext(ContextModal)