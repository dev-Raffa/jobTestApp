import './auth.css'
import { useState } from "react"
import { Logo } from "../../../../components/logo/logo"
import { UserLoginForm } from "./components/forms/auth"
import { UserRegisterForm } from "./components/forms/register"
import { useParams } from "react-router-dom"

export const UserAuthPage = ()=> {
    const{ action }=useParams<string>()
    const[formActive, setFormActive]=useState<string>(action? action:'login')

    const formActiveHandle = (form: string) =>{
        setFormActive(form)
    }
    return(
        <main className='auth-user-page'>

        <section form-active={formActive}  className="section-login-register">
            <article className="login">
                <section>
                    <Logo />
                    <button onClick={()=> formActiveHandle('register')}>cadastre-se</button>
                </section>
                <UserLoginForm />
            </article>
            <article className="register">
                <UserRegisterForm />
                <section>
                    <Logo />
                    <button onClick={()=> formActiveHandle('login')}>voltar ao login</button>
                </section>
            </article>
        </section>
        </main>
    )
} 