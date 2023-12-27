import { createContext, useContext } from "react";
import { ICourses, coursesFilters } from "../../../services/Api/types";

interface coursesContext {
  courses: ICourses[]
  categories: string[]
  addCourse: (args:ICourses)=> void
  updateCourse:(args: ICourses)=> void
  removeCourse:(id:number)=> void
  getOneCourse:(id:number)=>ICourses
  getCoursesFiltered:(filter: coursesFilters, value: string | number | boolean )=>ICourses[] 
}

export const CoursesContext = createContext({}as coursesContext)

export const useCourses = () => useContext(CoursesContext)
