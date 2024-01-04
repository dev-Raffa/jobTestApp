import { ReactNode } from "react";
import { CoursesModalProvider } from "./courses-modal";
import { ProfessorsModalProvider } from "./professors-modal";

export const PageAdminProviders = ({children}:{children: ReactNode})=>{
    return(
        <ProfessorsModalProvider>
            <CoursesModalProvider>
                {children}
            </CoursesModalProvider>    
        </ProfessorsModalProvider>
    )
}
