import { ReactNode } from "react"
import { CousesProvider } from "./courses"
import { AdminProvider } from "./admin"
import { ProfessorsProvider } from "./professors"
import { LessonsProvider } from "./lessons"

export const Providers = ({children}: {children: ReactNode})=> {
  return(
    <AdminProvider>
      <CousesProvider>
        <ProfessorsProvider>
          <LessonsProvider>
            {children}
          </LessonsProvider>
        </ProfessorsProvider>        
      </CousesProvider>
    </AdminProvider>
  )
}