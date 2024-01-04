import { ReactNode, useState } from "react";
import { CoursesContextModal } from "./context";

export const CoursesModalProvider = ({children}: {children: ReactNode}) =>{
    const [show, setIsShow] = useState<boolean>(false)

    const setShow = (arg: boolean)=>{
        setIsShow(arg)
    }
    return (
        <CoursesContextModal.Provider value={{show, setShow}}>
            {children}
        </CoursesContextModal.Provider>
    )
}