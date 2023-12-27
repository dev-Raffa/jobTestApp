import { ReactNode } from "react"
import { CousesProvider } from "./courses"
import { AdminProvider } from "./admin"

export const Providers = ({children}: {children: ReactNode})=> {
  return(
    <AdminProvider>
      <CousesProvider>
        {children}
      </CousesProvider>
    </AdminProvider>
  )
}