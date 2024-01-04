import './layout.css'

import {Navigate, Outlet } from "react-router-dom"
import { NavBar } from "./components/navbar"
import { useAdminContext } from "../../providers/admin/context"
import { PageAdminProviders } from './providers'

export const LayoutAdmin = ()=>{
  const {isLogged} = useAdminContext()

  if(isLogged === false){
   return <Navigate to='/auth/admin' />
  } 

  return (
    <PageAdminProviders>
      <main className="admin-root-layout">
        <NavBar />
        <section className='outlet'>
          {isLogged}
          <Outlet />
        </section>
      </main>
    </PageAdminProviders>
  )
}