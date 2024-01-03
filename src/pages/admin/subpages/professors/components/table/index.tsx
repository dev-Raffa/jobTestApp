import './table.css'

import { MdClear } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useProfessorsModal } from '../../../../providers/professors-modal/context';
import { useProfessor } from '../../../../../../providers/professors/context';
import { ProfessorsForm } from '../form';

export const TableProfessors = () =>{ 
  const {setShow} = useProfessorsModal()
  const {remove, professors, filteredProfessors, setIdProfessorSelected}= useProfessor()
  const listProfessors = filteredProfessors ? filteredProfessors : professors 


  const onClickButtonEditHandle = (id: number)=> {
    setIdProfessorSelected(id)
    setShow(true)
  }
  
  const onClickButtonClearHandle = async (id: number)=>{
    await remove(id)
  }
  

  return listProfessors ?
    (
      <>
      <ProfessorsForm />
      <table className='table professors'>
        <tbody>
          <tr>
          <th align='left'  className='tb-col id'>id</th>
          <th className='tb-col name'>nome</th>
          <th className='tb-col email'>email</th>
          <th className='tb-col subjects'>matérias</th>
          <th className='tb-col actions'>ações</th>
        </tr>
        {listProfessors.map((professor)=>{
          return (
            <tr key={professor.id}>
              <td className='tb-col id'>{professor.id}</td>
              <td className='tb-col name'>{professor.name}</td>
              <td className='tb-col email'>{professor.email}</td>
              <td className='tb-col subjects'>{professor.subjects}</td>
              <td className='tb-col actions'>
                <button className='edit' onClick={()=>onClickButtonEditHandle(professor.id)}>
                  <FaRegEdit />
                </button>
                <button className='clear' onClick={async ()=> await onClickButtonClearHandle(professor.id)}>
                  <MdClear />
                </button>
              </td>
            </tr>
        )
      })}
      </tbody>          
    </table>    
    </>
    ): 
    (
      <p>A sua pesquisa não obteve resultados.</p>
    )
    
  
}