import { ReactNode, useState } from "react";
import { ProfessorsContextModal } from "./context";

export const ProfessorsModalProvider = ({children}: {children: ReactNode}) =>{
    const [show, setIsShow] = useState<boolean>(false)

    const setShow = (arg: boolean)=>{
        setIsShow(arg)
    }
    return (
        <ProfessorsContextModal.Provider value={{show, setShow}}>
            {children}
        </ProfessorsContextModal.Provider>
    )
}