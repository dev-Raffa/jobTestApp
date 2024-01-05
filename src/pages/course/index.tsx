import './course.css'
import { useParams } from "react-router-dom"
import { useCourses } from "../../providers/courses/context"
import { useEffect, useState } from 'react'
import { ICourses } from '../../services/Api/types/course'
import { Logo } from '../../components/logo/logo'
import { useAdminContext } from '../../providers/admin/context'

import { LessonForm } from './components/form'
import { useLessonsModal } from './providers/lesson-modal/context'
import { useLessons } from '../../providers/lessons/contexts'
import { LessonsList } from './components/list'


export const CoursePage = () => {
 const {courseId} = useParams<string>()
 const { getOneWithLessons, setCourseSelected }= useCourses()
 const [course, setCourse]= useState<ICourses>()
 const [showDescription, setShowDescription] = useState<boolean>(false)
 const isAdmin = useAdminContext().isLogged
 const{setShow}=useLessonsModal()
 const {setLessonSelected} = useLessons()


 useEffect(()=>{
  async function getCourse (id:number) {
    await getOneWithLessons(id).then(resp => setCourse(resp))
  }
  courseId && getCourse(+courseId)   
 },[courseId, getOneWithLessons])

 const onClickShowDescriptionHandle=() => {
  setShowDescription(!showDescription)
 }

 const onClickAddLessonForm = () => {
  courseId && setCourseSelected(+courseId)
  setLessonSelected(undefined)
  setTimeout(() => {
    setShow(true)
    
  }, 350);
 }

  return course && (
    <>
      <section>
        <header className='course-lesson-header'>
          <Logo />
        </header>
        <article className='course-details'>
          <figure>
          <img src={course.imageUrl} alt={course.title} />
          <figcaption>{course.title}</figcaption>
        </figure>
        {
          //@ts-expect-error open
          <section open={showDescription} className='description'>
          <button onClick={onClickShowDescriptionHandle}>
            {showDescription? 'esconder': 'ler mais...'}
          </button>
          <p>
            {course.description}
          </p>
        </section>
        }
      </article>
    </section>
      <main className='lessons'>
        <section>
          <LessonForm />
          <h2>Lessons:</h2>
          {isAdmin&& <button onClick={onClickAddLessonForm}>adicionar aula</button>}
        </section>
        <ul>
          {course.classes ?
            <LessonsList lessons={course.classes}/>
          :
          <p>Não foram encontradas aulas para este curso.</p>
          }
        </ul>
      </main>
    </>
  )
}