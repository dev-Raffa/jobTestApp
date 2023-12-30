import { ReactNode, useState } from "react"
import { CoursesContext, addCourseResp } from "./context"
import { ICourses, courseAddArgs, coursesFilters } from "../../services/Api/types"
import { Api } from "../../services/Api"

export const CousesProvider = ({children}: {children: ReactNode}) => {
  const [courses, setCouses] =  useState<ICourses[]>(Api.getCourses())
  const [filteredCourses, setFilteredCourses] = useState<ICourses[]>()
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
    if(filteredCourses) {
      const index = filteredCourses.findIndex((course)=>course.id === args)
      filteredCourses.splice(index,1)
    }
    
  }

  const getOneCourse=(args: string)=>{
    const index = courses.findIndex((course) => course.id.toString() === args)
    
    return courses[index]
  }

  const filterCourses=(filter: coursesFilters, value: string|number|boolean)=>{
    if(!value){
      setFilteredCourses(undefined)
      return
    }
    
    if(filter=== "title" || filter ==='description'){
      setFilteredCourses(courses.filter((course)=> course[`${filter}`].toLowerCase().includes(value.toString().toLowerCase())))
      return
    }
    setFilteredCourses(courses.filter((course)=> course[`${filter}`] == value))
  }

  return (
    <CoursesContext.Provider  value={{courses, categories, filteredCourses, addCourse, updateCourse, removeCourse, getOneCourse, filterCourses}}>
        {children}
    </CoursesContext.Provider>
    )
}