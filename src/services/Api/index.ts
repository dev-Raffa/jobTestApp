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
    const courses  =  this.coursesRouter.getAll()
    
     courses.filter((course)=>{
      if(!this.categories.includes(course.category)){
        this.categories.push(course.category)
      } 
    })
  }

  getCourses(){
    return this.coursesRouter.getAll()
  }

  getCourseById(id: number){
    return this.coursesRouter.getOne(id)
  }

  saveCourse(args: courseAddArgs){
    const resp = this.coursesRouter.add(args)
    
    if(resp.length > 0 ){
      return {
        msg: 'success',
        obj: resp
      }
    }else {
      return {
        msg:"error"
      }
    }
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