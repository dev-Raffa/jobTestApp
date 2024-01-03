import { ReactNode, useState } from "react"
import { Api } from "../../services/Api"
import { IProfessors, professorAddArgs, filterProfessors } from "../../services/Api/types/professor"
import { ProfessorsContext } from "./context"

let Professors:IProfessors[];  

const getProfessor = async()=>{
  Professors = await Api.professors.getAll().then()
}

getProfessor()

export const ProfessorsProvider = ({children}: {children: ReactNode}) => {
  const [professors, setProfessors] =  useState<IProfessors[]>(Professors)
  const [filteredProfessors, setFilteredprofessors] = useState<IProfessors[]>()
  const [idProfessorSelected, changeIdProfessorSelected] = useState<number>()

  const setIdProfessorSelected=(id?: number)=>{
    changeIdProfessorSelected(id)
  }

  const getOne =  (id: string) => {
    const professor = professors?.find((professor)=> professor.id.toString() === id)
    if(!professor){
      throw new Error('professor não encontrado.')
    }
    return professor
  }

  const add = async (args: professorAddArgs) => {
    const professorExist = professors.find((professor)=> professor.email.toLowerCase() === args.email.toLowerCase())

    if(professorExist){
      throw new Error(`O email ${args.email} já está em uso.`)
    }

    const newprofessor:IProfessors = await Api.professors.save(args).then((resp)=>resp.json())
    
    setProfessors([
      ...professors,
      {
        id: newprofessor.id,
        name: newprofessor.name,
        age: newprofessor.age,
        email: newprofessor.email,
        phoneNumber: newprofessor.phoneNumber,
        subjects: newprofessor.subjects
      }
    ])  
  }

  const update = async (id: number, args: professorAddArgs) => {
    const idIsValid = professors.filter((professor)=>{professor.id ==id})

    if(!idIsValid){
      throw new Error('Id inválido, tente novamente.')
    }

    const newprofessors: IProfessors[] = await Api.professors.update(id, args).then((resp)=> resp.json())
     
    if(newprofessors){
      const newListprofessors: IProfessors[] =  professors.map((professor)=>{
        if(professor.id !== id){
          return professor
        }else {
          return {id: id, ...args}
        }
      })
      setProfessors(newListprofessors)
    }
    
  } 

  const remove = async (id:number) => {
    const idIsValid = professors.filter((professor)=> professor.id === id)
    
    if(!idIsValid){
      throw new Error('Id inválido, tente novamente.')
    }
 
    await Api.professors.delete(id).then(()=>{
      
      setProfessors(professors.filter((professor)=> professor.id !== id))
    })
  }

  
  const filter = (filter: filterProfessors, value: string| number)=>{
    if(!value){
      setFilteredprofessors(undefined)
      return
    }
        
    setFilteredprofessors(professors.filter((professor)=> professor[`${filter}`].toString().toLowerCase().includes(value.toString().toLowerCase())))    
  }

  return (
    <ProfessorsContext.Provider  value={
      {professors, filteredProfessors, idProfessorSelected, setIdProfessorSelected, add, getOne, filter, update, remove }}>
        {children}
    </ProfessorsContext.Provider>
    )
}