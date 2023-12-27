import { CwCarousel } from 'kyra-components-react'
import { CoursesContext } from '../../../../providers/courses/context'
import { ICourses } from '../../../../services/Api/types'
import { useContext } from 'react'
import './carousel.css'

export const Carousel = ()=> {
  const {getCoursesFiltered} = useContext(CoursesContext)
  
  const highlights:ICourses[] = getCoursesFiltered('highlight', true)

  return(
    <CwCarousel width='100vw' height='450px' index colors='#17c5ef'>
      {highlights.map((item, index)=>{
        return(
          <figure key={`highlight-course-${index}`} className='carousel-item'>
          <img src={item.imgUrl} alt={item.title} />
          <figcaption> 
            <section>
              <h2>{item.title}</h2>
              <p>{`${item.description.substring(0,48)}...`}</p>
            </section>
          </figcaption>
        </figure>
        )
      })}
    </CwCarousel>
  )
}