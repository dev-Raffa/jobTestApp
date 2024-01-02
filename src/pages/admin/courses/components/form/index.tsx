import './form.css'
import { useCourses } from "../../../../../providers/courses/context"
import { ICourses, courseAddArgs } from "../../../../../services/Api/types/course"
import { Button } from "../../../../../components/button"
import {useForm} from 'react-hook-form'
import { coursesForm, coursesFormSchema } from "./schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Modal } from "../../../../../components/modal"
import { useModal } from "../../../../../providers/modal/context"


export const CourseForm = () =>{
    const { setShow } = useModal() 
    const { add , getOne, update, idCourseSelected } = useCourses()
    const {register, handleSubmit, formState: {errors}, setValue} = useForm<coursesForm>({resolver: zodResolver(coursesFormSchema)})
    const course:ICourses | undefined = idCourseSelected ? getOne(idCourseSelected.toString()): undefined;
    const isNew = course? false: true

    if(course){
        setValue('title', course.title)
        setValue('description', course.description)
        setValue('imageUrl', course.imageUrl)
        setValue('category', course.category)
        setValue('highlight', course.highlight)
    }else {
        setValue('title', "")
        setValue('description', "")
        setValue('category', "")
        setValue('imageUrl', "")
        setValue('highlight', false)
    }

    const submit = async (req: courseAddArgs)=>{
        if(isNew){
            await add(req)
            }
        if(idCourseSelected){     
            const course:ICourses ={
                ...req,
                id: idCourseSelected
            }
            await update(idCourseSelected, course)           
        }
        setShow(false)         
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