import { ReactNode, useState } from "react";
import { LessonsContextModal} from "./context";

export const LessonsModalProvider = ({children}: {children: ReactNode}) =>{
    const [show, setIsShow] = useState<boolean>(false)

    const setShow = (arg: boolean)=>{
        setIsShow(arg)
    }
    return (
        <LessonsContextModal.Provider value={{show, setShow}}>
            {children}
        </LessonsContextModal.Provider>
    )
}