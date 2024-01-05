import './form.css'
import {useForm} from 'react-hook-form'
import { coursesForm, coursesFormSchema } from "./schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCoursesModal } from '../../../../providers/courses-modal/context'
import { useCourses } from '../../../../../../providers/courses/context'
import { ICourses, courseAddArgs } from '../../../../../../services/Api/types/course'
import { Modal } from '../../../../../../components/modal'
import { Button } from '../../../../../../components/button'
import { useEffect } from 'react'


export const CourseForm = () => {
    const { setShow, show } = useCoursesModal() 
    const { add , update, courseSelected } = useCourses()
    const {register, handleSubmit, formState: {errors}, setValue} = useForm<coursesForm>({resolver: zodResolver(coursesFormSchema)})
    
    useEffect(()=>{
        
        if(courseSelected){
            setValue('title', courseSelected.title)
            setValue('description', courseSelected.description)
            setValue('imageUrl', courseSelected.imageUrl)
            setValue('category', courseSelected.category)
            setValue('highlight', courseSelected.highlight)
        }else {
            setValue('title', "")
            setValue('description', "")
            setValue('category', "")
            setValue('imageUrl', "")
            setValue('highlight', false)
        }
    },[courseSelected, setValue] )


    const submit = async (req: courseAddArgs)=>{
        if(!courseSelected){
            await add(req)
            }
        else{     
            const course:ICourses ={
                ...req,
                id: courseSelected.id
            }
            await update(courseSelected.id, course)           
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
                        {...register('imageUrl')}
                    />
                </label>
                {errors.imageUrl && (<p>{errors.imageUrl.message}</p>)}
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
            </form>
        </Modal>
    )
}