import { ReactNode, useEffect, useState } from "react"
import { CoursesContext } from "./context"
import { ICourses, courseAddArgs, coursesFilters,} from "../../services/Api/types/course"
import { Api } from "../../services/Api"


export const CousesProvider = ({children}: {children: ReactNode}) => {
  const [courses, setCourses] =  useState<ICourses[]>([])
  const [filteredCourses, setFilteredCourses] = useState<ICourses[]>()
  const [courseSelected, changeCourseSelected] = useState<ICourses>()

  useEffect(()=>{
   Api.course.getAll().then(response => setCourses(response))
  },[])

  const setCourseSelected= async (id?: number)=>{
    if(id){
      const course = await Api.course.getOne(id)
      changeCourseSelected(course)
    }
    else{
      changeCourseSelected(undefined)
    }
  }

  const getOne = async(id: number) => {

    const course = await Api.course.getOne(id)
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
    let result;
   
    if(!value){
      result = undefined
    }else if(filter=== "title" || filter ==='description'){
       result = courses.filter((course)=> course[`${filter}`].toLowerCase().includes(value.toString().toLowerCase()))
    }else {
      result = courses.filter((course)=> course[`${filter}`] == value)
    }
    return result
  }

  const getOneWithLessons = async (id: number) => {
    const resp:ICourses = await Api.course.getOneWithLessons(id).then(resp=> resp.json())
    
    return resp
  }

  return (
    <CoursesContext.Provider  value={
      {courses, filteredCourses, courseSelected, setCourseSelected, add, getOne, filter,  setFilteredCourses, update,remove, getCategories, getOneWithLessons}}>
        {children}
    </CoursesContext.Provider>
    )
}