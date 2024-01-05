import { createContext, useContext } from "react"

export interface contextModalProps{
    show: boolean;
    setShow: (arg: boolean)=>void
}

export const LessonsContextModal = createContext({} as contextModalProps)

export const useLessonsModal = () => useContext(LessonsContextModal)