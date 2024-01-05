import { IAppLocalStorage } from "./types";

class appLocalStorage{

  getStorage():IAppLocalStorage | undefined {
    const session = window.localStorage.getItem('CourseApp') 
    if(session){
      return JSON.parse(session) 
    }
  }

  setStorage(args: IAppLocalStorage){
    window.localStorage.setItem('CourseApp', JSON.stringify(args))
  }

  clearStorage(){
    window.localStorage.clear()
  }
}

export const useAppLocal = new appLocalStorage()