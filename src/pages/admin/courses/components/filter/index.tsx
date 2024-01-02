import './index.css'

import { useCourses } from "../../../../../providers/courses/context"

export const FilterCourses = () =>{
    const{filter, getCategories}= useCourses()
    const categories = getCategories() 

    const onChangdHandle =(value:string) =>{
        filter('category', value)
    }
    return(
        <select 
            name="categories"
            className='filter-courses-category'
            onChange={(e)=>onChangdHandle(e.target.value)}
        >    
            <option value="">categeria</option>
            {categories && categories.map((category)=> <option key={`filter-category-${category}`} value={category}>{category}</option>)}
        </select>
    )
}