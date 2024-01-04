import { useCourses } from '../../../../../../providers/courses/context'
import './search.css'

export const SearchCourse = ()=>{
    const {filter}= useCourses()
    
    const onChageHandle=(value: string)=>{
        filter('title', value)
    }

    return(
        <label className='search-course'>
            <input placeholder='pesquisar por titulo' type="text"  onChange={(e)=>onChageHandle(e.target.value)} />
        </label>
    )
}