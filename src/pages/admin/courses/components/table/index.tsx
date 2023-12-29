import './table.css'
import { ICourses } from "../../../../../services/Api/types";
import { CourseForm } from '../form';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useState } from 'react';

export const TableCourses = ({courses}: {courses: ICourses[]}) =>{ 
  const [id, setId]= useState<string>()
  const [show, setShow]=useState<boolean>(false)

  const onClickButtonDetailsHandle=(id: number)=>{
    window.location.href = `admin/courses/${id}`
  }

  const onClickButtonEditHandle = (id: string)=> {
    setId(id)
    setShow(true)
  }

  return (
    <>
      <CourseForm show={show} id={id}/>
    <table className='table courses'>
      <tr>
        <th align='left'  className='tb-col id'>id</th>
        <th className='tb-col title'>titulo</th>
        <th className='tb-col category'>categoria</th>
        <th className='tb-col highlight'>em destaque</th>
        <th className='tb-col actions'>ações</th>
      </tr>
      {courses.map((course)=>{
        return (
          <>
            <tr>
              <td className='tb-col id'>{course.id}</td>
              <td className='tb-col title'>{course.title}</td>
              <td className='tb-col category'>{course.category}</td>
              <td className='tb-col highlight'>{course.highlight ? 'sim':'não'}</td>
              <td className='tb-col actions'>
                <button onClick={()=>onClickButtonDetailsHandle(course.id)}>
                  <MdOutlineRemoveRedEye />
                </button>
                <button onClick={()=>onClickButtonEditHandle(course.id.toString())}>
                  <FaRegEdit />
                </button>
              </td>
            </tr>          
          </>
        )
      })}
    </table>    
    </>
  )
}