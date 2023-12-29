import './courses.css'
import {  TableCourses } from "./components/table"
import { useCourses } from '../../../providers/courses/context'
import { FilterCourses } from './components/filter'
import { SearchCourse } from './components/search'


export const CoursesAdmin = () =>{
  const {courses} = useCourses()
  return (
    <>
      <header className='course-admin-header'>
        <h1>Couses</h1>
      </header>
      <section  className='course-admin-section-search'>
        <SearchCourse />
        <FilterCourses />
      </section>
      <TableCourses courses={courses} 
      />  
    </>
  )
}