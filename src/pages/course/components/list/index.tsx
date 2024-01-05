import "./list.css"
import { ILessons } from "../../../../services/Api/types/lesson"
import { Dropdown } from "../../../../components/dropdown"
import { useAdminContext } from "../../../../providers/admin/context"
import { FaRegEdit } from "react-icons/fa"
import { MdClear } from "react-icons/md"
import { useLessons } from "../../../../providers/lessons/contexts"
import { useLessonsModal } from "../../providers/lesson-modal/context"



export const LessonsList = ({lessons}: {lessons:ILessons[]})=>{
    const{isLogged}= useAdminContext()
    const{ remove, setLessonSelected }= useLessons()
    const {setShow} = useLessonsModal()

    const buttonClearClick = async  (id: number) =>{
        await remove(id)
    }

    const buttonEditClick = (id:number)=>{
        setLessonSelected(id)
        setTimeout(() => {
            setShow(true)
        }, 350);
    }

    return lessons.map((lesson)=>
        {
            return(
                <Dropdown 
                    key={`table-lessons-lesson-${lesson.id}`}
                    title={lesson.title}
                    buttons={isLogged && (
                        <section className="admin-buttons" >
                            <button 
                                className="bt-edit"
                                onClick={()=> buttonEditClick(lesson.id)}
                            >
                                <FaRegEdit />
                            </button>
                            <button
                                className="bt-clear" 
                                onClick={()=>buttonClearClick(lesson.id)}
                            >
                                <MdClear />
                            </button>
                        </section>
                    )}
                >
                    <p>{lesson.description}</p>
                    {
                }
                </Dropdown>
            )
        }
        
    )
}