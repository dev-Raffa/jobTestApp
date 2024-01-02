/*
import { ReactNode, useState } from "react"
import { ProfessorsContext } from "./context"
import { IProfessors, professorAddArgs } from "../../services/Api/types/professor"

export const ProfessorProvider = ({children}:{children: ReactNode}) => {
    const [professors, setProfessors] = useState<IProfessors[]>()

    const addProfessor= (args:professorAddArgs)=> {
        
    }
    const updateProfessor=(args: IProfessors)=> void
    const removeProfessor=(id:number)=> void
    const getOneProfessor=(id:string)=>IProfessors
    const filterProfessors=(filter: filterProfessors, value: string | boolean | number)=>void

    return(
        <ProfessorsContext.Provider value={{professors}}>
            {children}
        </ProfessorsContext.Provider>
    )
}

*/