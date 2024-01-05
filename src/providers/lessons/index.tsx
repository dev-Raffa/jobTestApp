import { ReactNode, useState } from "react";
import { LessonsConexts } from "./contexts";
import { ILessons, lessonAddArgs } from "../../services/Api/types/lesson";
import { Api } from "../../services/Api";

export const LessonsProvider = ({children}:{children: ReactNode})=> {
    const [lessonSelected, changeLessonSelected]= useState<ILessons>()

    const setLessonSelected = async (id?: number) =>{
        if(id){
            const lesson = await Api.lessons.getOne(id)
            changeLessonSelected(lesson)
        }else {
            changeLessonSelected(undefined)
        }
    }

    const add = async (args: lessonAddArgs) => {
        return await Api.lessons.save(args).then((resp)=>resp.json())
    }
    
    const update = async (id: number, args: lessonAddArgs) => {
        return await Api.lessons.update(id, args).then((resp)=> resp.json())
    } 
    
    const remove = async (id:number) => {
       return await Api.lessons.delete(id).then((resp)=>resp.json())
    }

    const getOne =async (id:number) => {
        const resp: ILessons = await Api.lessons.getOne(id).then((resp)=> resp.json())
        return resp
    }

    const getByCourse =async (id:number) => {
        const resp:ILessons[] = await Api.lessons.getByCourse(id).then(resp=>resp.json())       
        return resp
    }

    const getByProfessor = async (id: number) => {
        const resp:ILessons[] = await Api.lessons.getByProfessor(id).then(resp=>resp.json())
        return resp
    }

    return(
        <LessonsConexts.Provider value={{lessonSelected, setLessonSelected, add, update, remove, getOne, getByCourse, getByProfessor}}>
            {children}
        </LessonsConexts.Provider>
    )
}