import { useCourses } from "../../../../../providers/courses/context"
import { ICourses, courseAddArgs } from "../../../../../services/Api/types"
import { Button } from "../../../../../components/button"
import {useForm} from 'react-hook-form'
import { coursesForm, coursesFormSchema } from "./schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { Modal } from "../../../../../components/modal"


export const CourseForm = ({id, show}: {id?: string, show:boolean}) =>{
    const[isShow, setIsShow]= useState<boolean>(show)
    const { addCourse, getOneCourse } = useCourses()
    const {register, handleSubmit, formState: {errors}} = useForm<coursesForm>({resolver: zodResolver(coursesFormSchema)})
    const [msgErro, setMsgError] = useState<string>('')
    const course:ICourses | undefined = id ? getOneCourse(id): undefined; 

    const submit =  (req: courseAddArgs)=> {
        const {obj} = addCourse(req)

        if(!obj){
            setMsgError('Ocorreu um erro ao salvar os dados, por favor tente novamente')
        }
        
    }
    
    const onClickButtonCancel = ()=>{
        setIsShow(false)
    }

    return (
        <Modal show={`${isShow}`}>

        <form 
          onSubmit={handleSubmit(submit)} 
          className='course-admin-section-search'
          >
            <section className='column'>
                <input
                    type="text"
                    placeholder="titulo"
                    value={course && course.title}
                    {...register('title')} 
                />
                {errors.title && (<p>{errors.title.message}</p>)}
                <textarea 
                    placeholder='descrição'
                    value={course && course.description}
                    {...register('description')}
                />
                {errors.description && (<p>{errors.description.message}</p>)}
            </section>
            <section className='column'>
                <input 
                    type="text"
                    placeholder='url da imagem'
                    value={course && course.imgUrl}
                    {...register('imgUrl')}
                    />
                {errors.imgUrl && (<p>{errors.imgUrl.message}</p>)}
                <input 
                    type="text"
                    placeholder='categoria'
                    value={course && course.category}
                    {...register('category')}
                    />
                {errors.category && (<p>{errors.category.message}</p>)}
                <label>
                    <span>destacar?</span> 
                    <input
                        type="checkbox"
                        checked={course && course.highlight}  
                        {...register("highlight")}
                    />
                </label>
                {errors.highlight && (<p>{errors.highlight.message}</p>)}            
                    <Button type="button" variant="outline" onClick={onClickButtonCancel}>Cancelar</Button>
                    <Button type='submit' variant='default'>Salvar</Button>
                </section>
                {msgErro && (<p>{msgErro}</p>)}
            </form>
        </Modal>
    )
}