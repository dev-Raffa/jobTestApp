import { createContext, useContext } from "react";
import { IProfessors, filterProfessors, professorAddArgs } from "../../../services/Api/types/professor";


interface professorContextProps {
    professors?: IProfessors[],
    addProfessor: (args:professorAddArgs)=> professorAddArgs
    updateProfessor:(args: IProfessors)=> void
    removeProfessor:(id:number)=> void
    getOneProfessor:(id:string)=>IProfessors
    filterProfessors:(filter: filterProfessors, value: string | boolean | number)=>void
}

export const ProfessorsContext = createContext({} as professorContextProps)


export const useProfessor = () => useContext(ProfessorsContext)