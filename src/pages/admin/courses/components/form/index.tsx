import './form.css'
import { useCourses } from "../../../../../providers/courses/context"
import { ICourses, courseAddArgs } from "../../../../../services/Api/types"
import { Button } from "../../../../../components/button"
import {useForm} from 'react-hook-form'
import { coursesForm, coursesFormSchema } from "./schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { Modal } from "../../../../../components/modal"
import { useModal } from "../../../../../providers/modal/context"


export const CourseForm = ({id}: {id?: number}) =>{
    const {setShow} = useModal() 
    const { addCourse, getOneCourse, updateCourse } = useCourses()
    const {register, handleSubmit, formState: {errors}, setValue} = useForm<coursesForm>({resolver: zodResolver(coursesFormSchema)})
    const [msgErro, setMsgError] = useState<string>('')
    const course:ICourses | undefined = id ? getOneCourse(id.toString()): undefined;
    const isNew = course? false: true

    if(course){
        setValue('title', course.title)
        setValue('description', course.description)
        setValue('imgUrl', course.imgUrl)
        setValue('category', course.category)
        setValue('highlight', course.highlight)
    }

    const submit =  (req: courseAddArgs)=>{
        if(isNew){
            console.log('criou')
            const {obj} = addCourse(req)
            if(!obj){
                setMsgError('Ocorreu um erro ao salvar os dados, por favor tente novamente')
                return;
            }else{
                setShow(false)
                return
            }
        }
        if(id){     
            const course:ICourses ={
                ...req,
                id: Number(id)
            }
            updateCourse(course)
            setShow(false)
        } 

        
        
    }
    
    const onClickButtonCancel = ()=>{
        setShow(false)
    }

    return (
        <Modal>

        <form 
          onSubmit={handleSubmit(submit)} 
          className='course-admin-form'
          >
            <section className='column'>
                <label>
                    <span>
                        titulo:
                    </span>
                    <input
                        type="text"
                        {...register('title')} 
                    />
                </label>
                {errors.title && (<p>{errors.title.message}</p>)}
                <label>
                    <span>descrição:</span>
                    <textarea 
                        {...register('description')}
                    />
                </label>
                {errors.description && (<p>{errors.description.message}</p>)}
            </section>
            <section className='column'>
                <label>
                    <span>imagem:</span>
                    <input 
                        type="text"
                        placeholder='url da imagem'
                        {...register('imgUrl')}
                    />
                </label>
                {errors.imgUrl && (<p>{errors.imgUrl.message}</p>)}
                <label >
                    <span>categoria:</span>
                <input 
                    type="text"
                    {...register('category')}
                    />
                {errors.category && (<p>{errors.category.message}</p>)}
                </label>
                <label>
                    <p>
                        destacar?
                    </p>
                    <div className='switch'>
                        <input type='checkbox' {...register('highlight' )} />
                        <div className='ball' /> 
                    </div>
                </label>
                {errors.highlight && (<p>{errors.highlight.message}</p>)}
                    <section>
                        <Button type="button" variant="outline" onClick={onClickButtonCancel}>Cancelar</Button>
                        <Button type='submit' variant='default'>Salvar</Button>
                    </section>            
                </section>
                {msgErro && (<p>{msgErro}</p>)}
            </form>
        </Modal>
    )
}