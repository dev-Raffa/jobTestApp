import './search.css'
import { useCourses } from "../../../../../providers/courses/context"

export const SearchCourse = ()=>{
    const {filterCourses}= useCourses()
    
    const onChageHandle=(value: string)=>{
        filterCourses('title', value)
    }

    return(
        <label className='search-course'>
            <input placeholder='pesquisar por titulo' type="text"  onChange={(e)=>onChageHandle(e.target.value)} />
        </label>
    )
}