import { createContext } from "react";
import { ICourses, courseAddArgs, coursesFilters } from "../../../services/Api/types/course";
import { useContext } from "react";




export type addCourseResp = {
  msg:string,
  obj?: ICourses[]
}

interface coursesContext {
  courses: ICourses[]
  filteredCourses?: ICourses[]
  idCourseSelected?: number;
  setIdCourseSelected: (id?:number)=> void
  getCategories: () => string[]
  add: (args:courseAddArgs)=> void
  update:(id:number,args: ICourses)=> Promise<void>
  remove:(id:number)=> Promise<void>
  getOne:(id:string)=>ICourses
  filter:(filter: coursesFilters, value: string | boolean | number)=>void
}

export const CoursesContext = createContext({}as coursesContext)

export const useCourses = () => useContext(CoursesContext)