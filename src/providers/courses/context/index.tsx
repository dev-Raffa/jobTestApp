import { createContext, useContext } from "react";
import { ICourses, courseAddArgs, coursesFilters } from "../../../services/Api/types";

export type addCourseResp = {
  msg:string,
  obj?: ICourses[]
}

interface coursesContext {
  courses: ICourses[]
  categories: string[]
  addCourse: (args:courseAddArgs)=> addCourseResp
  updateCourse:(args: ICourses)=> void
  removeCourse:(id:number)=> void
  getOneCourse:(id:string)=>ICourses
  getCoursesFiltered:(filter: coursesFilters, value: string)=>ICourses[] 
}

export const CoursesContext = createContext({}as coursesContext)

export const useCourses = () => useContext(CoursesContext)
