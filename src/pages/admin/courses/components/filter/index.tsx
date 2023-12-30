import './index.css'

import { useCourses } from "../../../../../providers/courses/context"

export const FilterCourses = () =>{
    const{filterCourses, categories}= useCourses()

    const onChangdHandle =(value:string) =>{
        filterCourses('category', value)
    }
    return(
        <select 
            name="categories"
            className='filter-courses-category'
            onChange={(e)=>onChangdHandle(e.target.value)}
        >    
            <option value="">categeria</option>
            {categories.map((category)=> <option key={`filter-category-${category}`} value={category}>{category}</option>)}
        </select>
    )
}