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
  courseSelected?: ICourses;
  setCourseSelected: (id?:number)=> void
  setFilteredCourses: (arg?:ICourses[])=> void
  getCategories: () => string[]
  add: (args:courseAddArgs)=> void
  update:(id:number,args: ICourses)=> Promise<void>
  remove:(id:number)=> Promise<void>
  getOne:(id:number)=>Promise<ICourses>
  filter:(filter: coursesFilters, value: string | boolean | number)=>ICourses[]|undefined
  getOneWithLessons:(id:number)=> Promise<ICourses>
}

export const CoursesContext = createContext({}as coursesContext)

export const useCourses = () => useContext(CoursesContext)