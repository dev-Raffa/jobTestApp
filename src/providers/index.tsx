import { ReactNode } from "react"
import { CousesProvider } from "./courses"
import { AdminProvider } from "./admin"
import { ProfessorsProvider } from "./professors"
import { LessonsProvider } from "./lessons"
import { UserProvide } from "./users"

export const Providers = ({children}: {children: ReactNode})=> {
  return(
    <AdminProvider>
      <UserProvide>
        <CousesProvider>
          <ProfessorsProvider>
            <LessonsProvider>
              {children}
            </LessonsProvider>
          </ProfessorsProvider>        
        </CousesProvider>
      </UserProvide>
    </AdminProvider>
  )
}