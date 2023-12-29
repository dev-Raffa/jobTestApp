import { ReactNode, useState } from "react"
import { CoursesContext, addCourseResp } from "./context"
import { ICourses, courseAddArgs, coursesFilters } from "../../services/Api/types"
import { Api } from "../../services/Api"

export const CousesProvider = ({children}: {children: ReactNode}) => {
  const [courses, setCouses] =  useState<ICourses[]>(Api.getCourses())
  const categories = Api.categories

  const addCourse = (args: courseAddArgs)=>{
    const res:addCourseResp = Api.saveCourse(args)
    if(res.msg == "success"){
      res.obj && setCouses(res.obj)
    }
    return res
  }

  const updateCourse = (args: ICourses)=>{
    const res = Api.updateCourse(args)
    setCouses(res)
  }

  const removeCourse=(args: number) =>{
    const res = Api.deleteCourse(args)
    setCouses(res)
  }

  const getOneCourse=(args: string)=>{
    const index = courses.findIndex((course) => course.id.toString() === args)
    
    return courses[index]
  }

  const getCoursesFiltered=(filter: coursesFilters, value: string)=>{
    return courses.filter((course)=> course[`${filter}`].toString() === value)
    
  }

  return (
    <CoursesContext.Provider  value={{courses, categories, addCourse, updateCourse, removeCourse, getOneCourse, getCoursesFiltered}}>
        {children}
    </CoursesContext.Provider>
    )
}