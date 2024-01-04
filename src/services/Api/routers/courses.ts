import { ICourses, courseAddArgs } from "../types/course";

export class CoursesRouter {
  private endpoint = `${import.meta.env.VITE_API_BASE_URL}course/`;
  private headers = new Headers()

  constructor(){
    this.headers.append('Content-Type','application/json')
  }

  save = async (args: courseAddArgs) => {
    return await fetch(this.endpoint, {
      headers: this.headers,
      method: 'POST',
      body: JSON.stringify(args)
    })   
  }

  getAll = async (): Promise<ICourses[]> => {
    return await fetch(this.endpoint, {
      headers: this.headers,
      method: 'GET'
    }).then((resp)=> resp.json())
  }
    
  getOne = async (id:number) => {
    return await fetch(this.endpoint + `/${id}` , {
      headers: this.headers,
      method: 'GET'
    }).then((resp)=> resp.json())
  }

  update = async (id: number, args: courseAddArgs) => {
    return await fetch(this.endpoint + `/${id}`, {
      headers: this.headers,
      method: 'PATCH',
      body: JSON.stringify(args)   
    })
  }

  delete = async (id: number) => {
    return await fetch(this.endpoint + `/${id}`,{
      headers: this.headers,
      method: 'DELETE',
    })
  }
}