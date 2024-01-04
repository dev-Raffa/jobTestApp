import './form.css'
import {useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { professorForm, professorFormSchema } from './schema'
import { useProfessorsModal } from '../../../../providers/professors-modal/context'
import { IProfessors, professorAddArgs } from '../../../../../../services/Api/types/professor'
import { useProfessor } from '../../../../../../providers/professors/context'
import { Button } from '../../../../../../components/button'
import { Modal } from '../../../../../../components/modal'
import { useEffect } from 'react'


export const ProfessorsForm = () =>{
    const { show, setShow } = useProfessorsModal() 
    const { add , getOne, update, idProfessorSelected } = useProfessor()
    const { register, handleSubmit, formState: {errors}, setValue} = useForm<professorForm>({resolver: zodResolver(professorFormSchema)})
    const professor:IProfessors | undefined = idProfessorSelected ? getOne(idProfessorSelected.toString()): undefined;
    const isNew = professor? false: true

    useEffect(()=>{
        if(professor){
            setValue('name', professor.name)
            setValue('age', professor.age)
            setValue('email', professor.email)
            setValue('phoneNumber', professor.phoneNumber)
            setValue('subjects', professor.subjects)
        }else {
            setValue('name', "")
            setValue('age', "")
            setValue('email', "")
            setValue('phoneNumber', "")
            setValue('subjects', "")
        }
    },[professor, setValue])

    const submit = async (req: professorAddArgs)=>{
        if(isNew){
            await add(req)
            }
        if(idProfessorSelected){     
            const professor:IProfessors = {
                ...req,
                id: idProfessorSelected
            }
            await update(idProfessorSelected, professor)           
        }
        setShow(false)         
    }
    
    const onClickButtonCancel = ()=>{
        setShow(false)        
    }

    return (
        <Modal show={show}>

        <form 
          onSubmit={handleSubmit(submit)} 
          className='course-admin-form'
          >
            <section className='column'>
                <label>
                    <span>
                        nome:
                    </span>
                    <input
                        type="text"
                        {...register('name')} 
                    />
                </label>
                {errors.name && (<p>{errors.name.message}</p>)}
                <label>
                    <span>idade:</span>
                    <input 
                        {...register('age')}
                    />
                </label>
                {errors.age && (<p>{errors.age.message}</p>)}
            </section>
            <section className='column'>
                <label>
                    <span>email:</span>
                    <input 
                        type="text"
                        {...register('email')}
                    />
                </label>
                {errors.email && (<p>{errors.email.message}</p>)}
                <label >
                    <span>telefone:</span>
                <input 
                    type="text"
                    {...register('phoneNumber')}
                    />
                {errors.phoneNumber && (<p>{errors.phoneNumber.message}</p>)}
                </label>
                <label>
                    <span>
                        matérias:
                    </span>
                    <input type='text' {...register('subjects' )} />

                </label>
                {errors.subjects && (<p>{errors.subjects.message}</p>)}
                    <section>
                        <Button type="button" variant="outline" onClick={onClickButtonCancel}>Cancelar</Button>
                        <Button type='submit' variant='default'>Salvar</Button>
                    </section>            
                </section>
            </form>
        </Modal>
    )
}