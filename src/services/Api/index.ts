
import { AdminRouter } from "./routers/admin"
import { CoursesRouter } from "./routers/courses"
import { LessonsRouter } from "./routers/lessons"
import { ProfessosrRouter } from "./routers/professors"

class jobTestApi {
  admin = new AdminRouter()
  course = new CoursesRouter()
  professors = new ProfessosrRouter()
  lessons = new LessonsRouter()
}

export const Api = new jobTestApi()