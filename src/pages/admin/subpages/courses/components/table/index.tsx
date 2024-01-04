import './table.css'

import { CourseForm } from '../form';
import { MdClear, MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useCoursesModal } from '../../../../providers/courses-modal/context';
import { useCourses } from '../../../../../../providers/courses/context';

export const TableCourses = () =>{ 
  const {setShow} = useCoursesModal()
  const {remove, courses, filteredCourses, setIdCourseSelected}= useCourses()
  const listCourses = filteredCourses ? filteredCourses : courses 


  const onClickButtonEditHandle = (id: number)=> {
    setIdCourseSelected(id)
    setShow(true)
  }
  
  const onClickButtonClearHandle = async (id: number)=>{
    await remove(id)
  }
  

  return listCourses.length?
    (
      <>
      <CourseForm />
      <table className='table courses'>
        <tbody>
          <tr>
          <th align='left'  className='tb-col id'>id</th>
          <th className='tb-col title'>titulo</th>
          <th className='tb-col category'>categoria</th>
          <th className='tb-col highlight'>em destaque</th>
          <th className='tb-col actions'>ações</th>
        </tr>
        {listCourses.map((course)=>{
          return (
            <tr key={course.id}>
              <td className='tb-col id'>{course.id}</td>
              <td className='tb-col title'>{course.title}</td>
              <td className='tb-col category'>{course.category}</td>
              <td className='tb-col highlight'>{course.highlight ? 'sim':'não'}</td>
              <td className='tb-col actions'>
                <Link to={`/courses/${course.id}`} target='_blank'>
                  <MdOutlineRemoveRedEye />
                </Link>
                <button className='edit' onClick={()=>onClickButtonEditHandle(course.id)}>
                  <FaRegEdit />
                </button>
                <button className='clear' onClick={async ()=> await onClickButtonClearHandle(course.id)}>
                  <MdClear />
                </button>
              </td>
            </tr>
        )
      })}
      </tbody>          
    </table>    
    </>
    ): 
    (
      <p>A sua pesquisa não obteve resultados.</p>
    )
    
  
}