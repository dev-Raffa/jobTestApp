import './form.css'
import { useState } from "react"
import { useAdminContext } from "../../../../../providers/admin/context"
import {useForm} from 'react-hook-form'
import { authAdminForm, authAdminFormSchema } from "./types.tsx/schema"
import {zodResolver} from '@hookform/resolvers/zod'
import { Button } from "../../../../../components/button"
import { Logo } from '../../../../../components/logo/logo'
import { IoPersonOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";


export const AuthAdminForm = () =>{
  const [msgError, setMsgError] = useState<string>('')
  const {login}= useAdminContext()
  const {register, handleSubmit, formState: {errors}} =useForm<authAdminForm>({resolver: zodResolver(authAdminFormSchema)})
  
  const submit = async (req: authAdminForm) => {
   const isValid = await login({email: req.user, password: req.password})
  console.log(isValid)
    if(isValid === "Success"){
      return (
        window.location.href = '/admin/courses'
      )
    }else{
      setMsgError('usuário ou senha inválidos')
    }
  }

  return(
    <form onSubmit={handleSubmit(submit)} className='admin-auth-form'>
      <Logo />
      <label>
        <IoPersonOutline />
        <input 
          type="text"
          {...register('user')} 
        />
      </label>
      {errors.user && (<p>{errors.user.message}</p>)}
      <label>
        <RiLockPasswordLine />
        <input 
          type="password"
          {...register('password')} 
        />
      </label>
      {errors.password && (<p>{errors.password.message}</p>)}

      {msgError && (<p>{msgError}</p>)}

      <Button variant='default'>
        Login
      </Button>
    </form>
  )
}