
import { CwCarousel } from 'kyra-components-react'
import './carousel.css'
import { useCourses } from '../../../../providers/courses/context'

export const Carousel = () => {
  const {filter, filteredCourses} = useCourses()
  

  filter('highlight', true)

  return filteredCourses && (
    <CwCarousel width='100vw' height='450px' index colors='#17c5ef'>
      { filteredCourses.map((item, index)=>{
        return(
          <figure key={`highlight-course-${index}`} className='carousel-item'>
          <img src={item.imageUrl} alt={item.title} />
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