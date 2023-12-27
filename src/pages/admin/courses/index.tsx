import './courses.css'
import { useState } from 'react'
import { useCourses } from "../../../providers/courses/context"
import { ICourses } from "../../../services/Api/types"
import { SectionCoursesAuth } from "./components/courses"
import { CwSwitch } from 'kyra-components-react'
import { Button } from '../../../components/button'

export const CoursesAdmin = () =>{
  const {getCoursesFiltered, courses, categories } = useCourses()
  const [coursesFiltereds, setCoursesFiltereds ] = useState<ICourses[]>()

  const filtersOnChangedHandle = (filter:keyof ICourses, value:string|boolean|number)=> {
    setCoursesFiltereds(getCoursesFiltered(filter, value))
  }

  return (
    <>
      <header className='course-admin-header'>
        <h1>Couses</h1>
      </header>
      <form className='course-admin-section-search'>
        <section className='column'>
          <input 
            type="text"
            placeholder="titulo"
          />
          <textarea 
            name="description" 
            id="course-description" 
            cols={30} 
            rows={10}
            placeholder='descrição'
            ></textarea>
        </section>
        <section className='column'>

          <input 
            type="text"
            placeholder='url da imagem'
          />
          <select 
            name="category" 
            id="selecet-catogry-courses"
          >
            <option value=""> categoria </option>
            {categories.map((category)=>{
              return(
              <option value={category}> {category}</option>
            )})}
          </select>
          <label htmlFor="highlight">
            <span>destacar?</span> 
            <CwSwitch 
              bgColorUnselected='white'
              ballColorUnselected='black'
              bgColorSelected='#17c5ef'
              value={false} />
          </label>
          <section>
            <Button variant='default'>Salvar</Button>
            <Button variant='outline'>Buscar</Button>
          </section>
        </section>
      </form>
      <SectionCoursesAuth courses={ coursesFiltereds ? coursesFiltereds : courses} 
      />  
    </>
  )
}