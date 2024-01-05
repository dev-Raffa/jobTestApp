import { ILessons, lessonAddArgs } from "../types/lesson"

export class LessonsRouter {
    private endpoint = `${import.meta.env.VITE_API_BASE_URL}class`
    private headers = new Headers()

  constructor(){
    this.headers.append('Content-Type','application/json')
  }

  save = async (args: lessonAddArgs) => {
    return await fetch(this.endpoint, {
      headers: this.headers,
      method: 'POST',
      body: JSON.stringify(args)
    })   
  }

  getAll = async (): Promise<ILessons[]> => {
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

  update = async (id: number, args: lessonAddArgs) => {
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

  getByProfessor = async (id:number)=>{
    return await fetch(`${this.endpoint}/professor/${id}`, {
      headers: this.headers,
      method: "GET"
    }).then((resp)=> resp.json())
  }

  getByCourse = async (id:number)=>{
    return await fetch(`${this.endpoint}/course/${id}`,{
      headers: this.headers,
      method: "GET"
    }).then((resp)=> resp.json())
  }
}