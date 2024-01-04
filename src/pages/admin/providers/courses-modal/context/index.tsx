import { createContext, useContext } from "react"

export interface contextModalProps{
    show: boolean;
    setShow: (arg: boolean)=>void
}

export const CoursesContextModal = createContext({} as contextModalProps)

export const useCoursesModal = () => useContext(CoursesContextModal)