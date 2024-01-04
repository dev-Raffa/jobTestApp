import './course.css'
import { useParams } from "react-router-dom"
import { useCourses } from "../../providers/courses/context"

export const CoursePage = ()=> {
 const {courseId} = useParams()
 const { getOne }= useCourses()
 const course = courseId && getOne(courseId)

  return course && (
    <section className='course-details'>
      <figure>
        <img src={course.imageUrl} alt={course.title} />
        <figcaption>{course.title}</figcaption>
      </figure>
      <section>
        <p>
          {course.description}
        </p>
      </section>
    </section>
  )
}