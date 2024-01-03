import { Button } from '../../../../components/button'
import { useProfessor } from '../../../../providers/professors/context'
import { useProfessorsModal } from '../../providers/professors-modal/context'
import { SearchProfessor } from './components/search'
import { TableProfessors } from './components/table'
import './professors.css'



export const ProfessorsAdmin = () =>{
  const {setShow}= useProfessorsModal()
  const {setIdProfessorSelected} = useProfessor()

  const addButtonHandle = ()=>{
    setIdProfessorSelected(undefined)
    setShow(true)
  }

  return (
    <>
      <header className='course-admin-header'>
        <h1>Prefessores</h1>
      </header>
      <section  className='course-admin-section-search'>
        <div>
          <SearchProfessor />
          <Button variant='default' onClick={()=>addButtonHandle()}>
            cadastrar
          </Button>
        </div>
      </section>
      <TableProfessors />  
    </>
  )
}