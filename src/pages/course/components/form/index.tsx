import { zodResolver } from "@hookform/resolvers/zod"
import { useLessons } from "../../../../providers/lessons/contexts"
import { ILessons, lessonAddArgs } from "../../../../services/Api/types/lesson"
import { useLessonsModal } from "../../providers/lesson-modal/context"
import "./form.css"
import { lessonForm, lessonFormSchema } from "./schema"
import { useForm } from "react-hook-form"
import { useEffect } from "react"
import { Modal } from "../../../../components/modal"
import { Button } from "../../../../components/button"
import { useCourses } from "../../../../providers/courses/context"
import { useProfessor } from "../../../../providers/professors/context"



export const LessonForm = () => {
    const {lessonSelected, add, update} = useLessons()
    const {courseSelected } = useCourses()
    const {professors}=useProfessor()
    const {setShow, show} = useLessonsModal()
    const {register, handleSubmit, formState: {errors}, setValue} = useForm<lessonForm>({resolver: zodResolver(lessonFormSchema)})
    

    useEffect(()=>{
        if(lessonSelected){
            setValue('title', lessonSelected.title)
            setValue('description', lessonSelected.description)
            setValue('type', lessonSelected.type)
            setValue('url', lessonSelected.url)
            setValue('course', lessonSelected.course)
            setValue('professor', lessonSelected.professor)
        }else{
            setValue('title', '')
            setValue('description', '')
            setValue('type', '')
            setValue('url', '')
            setValue('course', courseSelected? courseSelected.id : 0)
            setValue('professor', '')
        }
    },[lessonSelected, setValue, courseSelected])
    

    const submit = (req: lessonAddArgs)=>{
        if(!lessonSelected){
             add(req)
            }
        else{     
            const course:ILessons ={
                ...req,
                id: lessonSelected.id
            }
            update(lessonSelected.id, course)           
        }
        setShow(false)         
    }

    const onClickButtonCancel = ()=>{
        setShow(false)        
    }

    return(
        <Modal show={show}>
            <form
                onSubmit={handleSubmit(submit)}
                className="courses-lesson-form" 
            >
                <section className="column">
                    <label>
                        <span>titulo:</span>
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
                <section className="column">
                    <label>
                        <span>tipo:</span>
                        <select 
                            {...register('type')} 
                        >
                            <option value="">tipo</option>
                            <option value="video">video</option>
                            <option value="text">texto</option>
                            <option value="live">live</option>
                        </select>
                    </label>
                    {errors.type && (<p>{errors.type.message}</p>)}
                    <label>
                        <span>url da aula:</span>
                        <input 
                            type="text"
                            {...register('url')}
                        />
                    </label>
                    {errors.url && (<p>{errors.url.message}</p>)}
                    <label>
                        <span>id professor:</span>
                        <select  
                            {...register('professor')}
                        >
                            <option value={0}>selecione um professor</option>
                            {professors && professors.map((professor)=>{
                                return( 
                                <option 
                                    key={`form-lessons-prof-option-${professor.id}`} 
                                    value={professor.id}
                                >
                                    {professor.name}
                                </option>
                            )})}
                        </select>

                    </label>
                    {errors.professor && (<p>{errors.professor.message}</p>)}
                    <label>
                        <span>id curso:</span>
                        <input 
                            type="text"
                            disabled={courseSelected?true:false}
                            {...register('course')}
                        />
                    </label>
                    {errors.course && (<p>{errors.course.message}</p>)}

                    <section>
                        <Button 
                            type="button"
                            variant="outline"
                            onClick={onClickButtonCancel}
                        >
                            Cancelar
                        </Button>
                        <Button variant="default" type="submit">
                            Salvar
                        </Button>
                    </section>
                </section>
            </form>
        </Modal>
    )
}