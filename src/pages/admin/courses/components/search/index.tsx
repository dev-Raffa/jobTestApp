import './search.css'
import { useCourses } from "../../../../../providers/courses/context"

export const SearchCourse = ()=>{
    const {getCoursesFiltered}= useCourses()
    
    const onChageHandle=(value: string)=>{
        value && getCoursesFiltered('title', value)
    }

    return(
        <label>
            <input type="text"  onChange={(e)=>onChageHandle(e.target.value)} />
        </label>
    )
}