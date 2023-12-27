import './cards.css'
import { CwCard } from "kyra-components-react"
import { useCourses } from "../../../../providers/courses/context"
import { Link } from 'react-router-dom'

export const SectionCards =()=>{
  const {courses} = useCourses()

  return(
    <section className='section-cards-courses'>
      { courses.map((course, index)=>{
        return(
          <li>
            <Link to={`courses/${course.id}`}>
                <CwCard key={`section-course-card${index}`} width='350px' height='300px' bgColor='#d1d1d1' borderRadius='5px'>
                  <figure>
                    <img src={course.imgUrl} alt={course.title} />
                    <figcaption>{course.title}</figcaption>
                  </figure>
                </CwCard>
            </Link>
          </li>
        )
      })}
    </section>
  )
}