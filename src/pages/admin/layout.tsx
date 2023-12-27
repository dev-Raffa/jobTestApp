import './layout.css'

import {Navigate, Outlet } from "react-router-dom"
import { NavBar } from "./components/navbar"
import { useAdminContext } from "../../providers/admin/context"

export const LayoutAdmin = ()=>{
  const {isLogged} = useAdminContext()

  if(isLogged === false){
   return <Navigate to='/auth/admin' />
  } 

  return (
    <main className="admin-root-layout">
      <NavBar />
      <section className='outlet'>
        {isLogged}
        <Outlet />
      </section>
    </main>
  )
}