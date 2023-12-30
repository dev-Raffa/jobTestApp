import { ReactNode, useState } from "react";
import { ContextModal } from "./context";

export const ModalProvider = ({children}: {children: ReactNode}) =>{
    const [show, setIsShow] = useState<boolean>(false)

    const setShow = (arg: boolean)=>{
        setIsShow(arg)
    }
    return (
        <ContextModal.Provider value={{show, setShow}}>
            {children}
        </ContextModal.Provider>
    )
}