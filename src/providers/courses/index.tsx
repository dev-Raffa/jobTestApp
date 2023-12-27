import { ReactNode, useState } from "react"
import { CoursesContext } from "./context"
import { ICourses, courseAddArgs, coursesFilters } from "../../services/Api/types"
import { Api } from "../../services/Api"

export const CousesProvider = ({children}: {children: ReactNode}) => {
  const [courses, setCouses] =  useState<ICourses[]>(Api.getCourses())
  const categories = Api.categories

  const addCourse = (args: courseAddArgs)=>{
    const res = Api.saveCourse(args)
    setCouses(res)
  }

  const updateCourse = (args: ICourses)=>{
    const res = Api.updateCourse(args)
    setCouses(res)
  }

  const removeCourse=(args: number) =>{
    const res = Api.deleteCourse(args)
    setCouses(res)
  }

  const getOneCourse=(args: number)=>{
    const index = courses.findIndex((course) => course.id === args)
    
    return courses[index]
  }

  const getCoursesFiltered=(filter: coursesFilters, value: string | number | boolean )=>{
    return courses.filter((course)=> course[`${filter}`] === value)
  }

  return (
    <CoursesContext.Provider  value={{courses, categories, addCourse, updateCourse, removeCourse, getOneCourse, getCoursesFiltered}}>
        {children}
    </CoursesContext.Provider>
    )
}