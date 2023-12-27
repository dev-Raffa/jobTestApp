import './logo.module.css'
import { LuLibrary } from "react-icons/lu"

export const Logo = () => {
  return(
    <div className={'logo'}>
      <figure>
        <LuLibrary  />
      </figure>
      <p>CoursesApp</p>
    </div>
  )
}