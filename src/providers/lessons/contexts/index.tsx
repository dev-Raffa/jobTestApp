import { createContext, useContext } from "react";
import { ILessons, lessonAddArgs } from "../../../services/Api/types/lesson";

interface lessonsContext {
    lessonSelected?: ILessons;
    setLessonSelected: (id?:number) => void
    add: (args:lessonAddArgs) => void
    update:(id:number,args: ILessons) => Promise<void>
    remove:(id:number) => Promise<void>
    getOne:(id:number) =>Promise<ILessons>
    getByCourse:(id:number) => Promise<ILessons[]>
    getByProfessor:(id:number)=> Promise<ILessons[]>
  }

export const LessonsConexts = createContext({}as lessonsContext)

export const useLessons = ()=> useContext(LessonsConexts)