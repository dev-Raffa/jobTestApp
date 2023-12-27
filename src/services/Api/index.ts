import { MockRouterIcourses } from "../Api/mockRepositories/courses";
import { ICourses, courseAddArgs } from "../Api/types";

class jobTestApi {
  private coursesRouter:MockRouterIcourses;   
  categories: string[] = []
  
  constructor(){
    this.coursesRouter = new MockRouterIcourses
    this.getCategories()
  }

  private getCategories (){
    let courses  =  this.coursesRouter.getAll()
     courses = courses.filter((course, index, self )=>{
      self.indexOf(course)=== index
    })
    courses.map((course)=> this.categories.push(course.category))
  }

  getCourses(){
    return this.coursesRouter.getAll()
  }

  getCourseById(id: number){
    return this.coursesRouter.getOne(id)
  }

  saveCourse(args: courseAddArgs){
    return this.coursesRouter.add(args)
  }

  updateCourse(args: ICourses){
    return this.coursesRouter.update(args)
  }

  deleteCourse(id:number){
    return this.coursesRouter.delete(id)
  }
  validateAdim(user: string, password: string){
    if(user=== 'admin' && password ==='123456789'){
      return true
    }
    return false
  }
}

export const Api = new jobTestApi()