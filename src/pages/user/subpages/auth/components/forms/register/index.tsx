import './form.css'
import { useState } from 'react'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useUser } from "../../../../../../../providers/users/contexts"
import { registerUserForm, registerUserFormSchema } from './schema'
import { Button } from '../../../../../../../components/button'

export const UserRegisterForm =()=>{
    const [msgError, setMsgError] = useState<string>('')
    const {save}= useUser()
    const {register, handleSubmit, formState: {errors}}=useForm<registerUserForm>({resolver: zodResolver(registerUserFormSchema)})
    
    const submit = async (req: registerUserForm )=>{
        await save(req).then(()=>{
            return(
                window.location.href = '/'
            )
        }).catch((e)=>{
            setMsgError(e.message)
        })
    }
    
    return (
        <form
            className='form-register' 
            onSubmit={handleSubmit(submit)} 
        >
            <h2>Register</h2>
            <label>
                <input 
                    type="email"
                    {...register('email')} 
                />
            </label>
            {errors.email && (<p>{errors.email.message}</p>)}
            <label>
                <input 
                    type="password"
                    {...register('password')}  
                />
            </label>
            {errors.password && (<p>{errors.password.message}</p>)}
            
            {msgError && (<p>{msgError}</p>)}

            <Button
                variant='default' 
                type='submit'
            >
                Cadastrar
            </Button>
        </form>
    )
}