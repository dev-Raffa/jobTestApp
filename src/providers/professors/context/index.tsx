import { createContext, useContext } from "react";
import { IProfessors, filterProfessors, professorAddArgs } from "../../../services/Api/types/professor";


interface professorContextProps {
    professors: IProfessors[],
    filteredProfessors?: IProfessors[],
    idProfessorSelected?: number,
    setIdProfessorSelected: (id?: number)=>void 
    add: (args:professorAddArgs)=> void,
    update:(id: number, args: professorAddArgs)=> void,
    remove:(id:number)=> void,
    getOne:(id:string)=>IProfessors,
    filter:(filter: filterProfessors, value: string | number)=>void
}

export const ProfessorsContext = createContext({} as professorContextProps)


export const useProfessor = () => useContext(ProfessorsContext)