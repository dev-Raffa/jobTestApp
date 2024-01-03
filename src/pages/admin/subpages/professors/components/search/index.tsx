import { useProfessor } from '../../../../../../providers/professors/context'
import './search.css'

export const SearchProfessor = ()=>{
    const {filter}= useProfessor()
    
    const onChageHandle=(value: string)=>{
        filter('name', value)
    }

    return(
        <label className='search-professor'>
            <input placeholder='pesquisar por nome' type="text"  onChange={(e)=>onChageHandle(e.target.value)} />
        </label>
    )
}