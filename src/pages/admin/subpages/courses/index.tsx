import './courses.css'
import {  TableCourses } from "./components/table"
import { FilterCourses } from './components/filter'
import { SearchCourse } from './components/search'
import { useCoursesModal } from '../../providers/courses-modal/context'
import { useCourses } from '../../../../providers/courses/context'
import { Button } from '../../../../components/button'



export const CoursesAdmin = () =>{
  const {setShow}= useCoursesModal()
  const {setIdCourseSelected} = useCourses()

  const addButtonHandle = ()=>{
    setIdCourseSelected(undefined)
    setShow(true)
  }

  return (
    <>
      <header className='course-admin-header'>
        <h1>Cursos</h1>
      </header>
      <section  className='course-admin-section-search'>
        <div>
          <SearchCourse />
          <FilterCourses />
          <Button variant='default' onClick={()=>addButtonHandle()}>
            criar curso
          </Button>
        </div>
      </section>
      <TableCourses />  
    </>
  )
}