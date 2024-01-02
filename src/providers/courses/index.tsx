import { ReactNode, useState } from "react"
import { CoursesContext } from "./context"
import { ICourses, courseAddArgs, coursesFilters,} from "../../services/Api/types/course"
import { Api } from "../../services/Api"

const Courses:ICourses[] = await Api.course.getAll().then()

export const CousesProvider = ({children}: {children: ReactNode}) => {
  const [courses, setCourses] =  useState<ICourses[]>(Courses)
  const [filteredCourses, setFilteredCourses] = useState<ICourses[]>()
  const [idCourseSelected, changeIdCourseSelected] = useState<number>()

  const setIdCourseSelected=(id?: number)=>{
    changeIdCourseSelected(id)
  }

  const getOne =  (id: string) => {
    const course = courses?.find((course)=> course.id.toString() === id)
    if(!course){
      throw new Error('curso não encontrado.')
    }
    return course
  }

  const add = async (args: courseAddArgs) => {
    const courseExist = courses.find((course)=> course.title.toLowerCase() === args.title.toLowerCase())

    if(courseExist){
      throw new Error(`O curso ${args.title} já existe.`)
    }

    const newCourse:ICourses = await Api.course.save(args).then((resp)=>resp.json())
    
    setCourses([
      ...courses,
      {
        id: newCourse.id,
        title: newCourse.title,
        description: newCourse.category,
        category: newCourse.category,
        highlight: newCourse.highlight,
        imageUrl: newCourse.imageUrl
      }
    ])
    
  }

  const update = async (id: number, args: courseAddArgs) => {
    const idIsValid = courses.filter((course)=>{course.id ==id})

    if(!idIsValid){
      throw new Error('Id inválido, tente novamente.')
    }

    const newCourses: ICourses[] = await Api.course.update(id, args).then((resp)=> resp.json())
     
    if(newCourses){
      const newListCourses: ICourses[] =  courses.map((course)=>{
        if(course.id !== id){
          return course
        }else {
          return {id: id, ...args}
        }
      })
      setCourses(newListCourses)
    }
    
  } 

  const remove = async (id:number) => {
    const idIsValid = courses.filter((course)=> course.id === id)
    
    if(!idIsValid){
      throw new Error('Id inválido, tente novamente.')
    }
 
    await Api.course.delete(id).then(()=>{
      
      setCourses(courses.filter((course)=> course.id !== id))
    })
  }

  
  const getCategories = () =>{
    const categories: string[]  =  [] 
    courses.map((course)=>{
      const ver = categories.includes(course.category)
      if(!ver){
        categories.push(course.category)
      }
    })
    return categories;
  }

  
  const filter = (filter: coursesFilters, value: string|number|boolean)=>{
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
    <CoursesContext.Provider  value={
      {courses, filteredCourses, idCourseSelected, setIdCourseSelected, add, getOne, filter, update,remove, getCategories}}>
        {children}
    </CoursesContext.Provider>
    )
}