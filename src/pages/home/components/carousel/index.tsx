
import { CwCarousel } from 'kyra-components-react'
import './carousel.css'
import { useCourses } from '../../../../providers/courses/context'
import { useEffect, useState } from 'react'
import { ICourses } from '../../../../services/Api/types/course'

export const Carousel = () => {
  const {filter } = useCourses()

  const [highlight, setHighLight] = useState<ICourses[]>()
  
  useEffect(()=>{
   const res = filter('highlight', true)
    res && setHighLight(res)

  },[setHighLight, filter]) 
 
  return highlight && (
    <CwCarousel width='100vw' height='450px' index colors='#17c5ef'>
      { highlight.map((item, index)=>{
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