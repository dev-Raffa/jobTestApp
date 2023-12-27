import './courses.css'
import { CwCard } from "kyra-components-react";
import { ICourses } from "../../../../../services/Api/types";
import { Link } from "react-router-dom";

export const SectionCoursesAuth = ({courses}: {courses: ICourses[]}) =>{
    return (
      <section className='section-courses-auth-card'>
       {courses.map((course, index)=>{
         return(
          <Link to={`/admin/courses/${course.id}`}>
            <CwCard 
              key={`section-courses-admin-card-${index}`}
              height='300px'
              width='250px'
              bgColor=''
            >
              <figure>
                <img src={course.imgUrl} alt={course.title} />
                <figcaption>{course.title}</figcaption>
              </figure>
              <section>
                <p>{course.description.substring(0, 48)}...</p>
              </section>
              </CwCard>
            </Link>
          )
        }
       )}
      </section>
    )
    
  
}