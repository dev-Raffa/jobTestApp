import { ReactNode } from "react"
import { CousesProvider } from "./courses"
import { AdminProvider } from "./admin"
import { ModalProvider } from "./modal"

export const Providers = ({children}: {children: ReactNode})=> {
  return(
    <AdminProvider>
      <CousesProvider>
        <ModalProvider>
          {children}
        </ModalProvider>
      </CousesProvider>
    </AdminProvider>
  )
}