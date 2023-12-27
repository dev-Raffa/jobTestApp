import { IAppSessionStorage } from "../appSessionStorage/types";

class appSessionStorage{

  getStorage():IAppSessionStorage | undefined {
    const session = window.sessionStorage.getItem('CourseApp') 
    if(session){
      return JSON.parse(session) 
    }
  }

  setStorage(args: IAppSessionStorage){
    window.sessionStorage.setItem('CourseApp', JSON.stringify(args))
  }

  clearStorage(){
    window.sessionStorage.clear()
  }
}

export const useAppSession = new appSessionStorage()