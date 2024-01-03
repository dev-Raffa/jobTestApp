import { ReactNode } from "react"
import { CousesProvider } from "./courses"
import { AdminProvider } from "./admin"
import { ProfessorsProvider } from "./professors"

export const Providers = ({children}: {children: ReactNode})=> {
  return(
    <AdminProvider>
      <CousesProvider>
        <ProfessorsProvider>
          {children}
        </ProfessorsProvider>        
      </CousesProvider>
    </AdminProvider>
  )
}