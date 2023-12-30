import './table.css'

import { CourseForm } from '../form';
import { MdClear, MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useModal } from '../../../../../providers/modal/context';
import { useCourses } from '../../../../../providers/courses/context';
import { ICourses } from '../../../../../services/Api/types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const TableCourses = ({courses}:{courses: ICourses[]} ) =>{ 
  const [id, setId]= useState<number>()
  const {setShow}=useModal()
  const {removeCourse}= useCourses()
  
  
  const onClickButtonEditHandle = (id: number)=> {
    setId(id)
    setShow(true) 
  }
  
  const onClickButtonClearHandle = (id: number)=>{
    removeCourse(id)
    setId(id)

  }
  
  
  return courses.length?
    (
      <>
      <CourseForm id={id}/>
      <table className='table courses'>
        <tbody>
          <tr>
          <th align='left'  className='tb-col id'>id</th>
          <th className='tb-col title'>titulo</th>
          <th className='tb-col category'>categoria</th>
          <th className='tb-col highlight'>em destaque</th>
          <th className='tb-col actions'>ações</th>
        </tr>
        {courses.map((course)=>{
          return (
            <tr key={`table-courses-course-${course.id}`}>
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
                <button className='clear' onClick={()=>onClickButtonClearHandle(course.id)}>
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