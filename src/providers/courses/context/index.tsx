import { createContext } from "react";
import { ICourses, courseAddArgs, coursesFilters } from "../../../services/Api/types";
import { useContext } from "react";




export type addCourseResp = {
  msg:string,
  obj?: ICourses[]
}

interface coursesContext {
  courses: ICourses[]
  filteredCourses?: ICourses[]
  categories: string[]
  addCourse: (args:courseAddArgs)=> addCourseResp
  updateCourse:(args: ICourses)=> void
  removeCourse:(id:number)=> void
  getOneCourse:(id:string)=>ICourses
  filterCourses:(filter: coursesFilters, value: string | boolean | number)=>void
}

export const CoursesContext = createContext({}as coursesContext)

export const useCourses = () => useContext(CoursesContext)