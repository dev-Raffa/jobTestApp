import './auth.css'
import { AuthAdminForm } from "./components/form"

export const AuthAdmin = ()=> {
  return(
   <section className='auth-page-container'>
     <AuthAdminForm />
   </section>
  )
}