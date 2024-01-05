
import { AdminRouter } from "./routers/admin"
import { CoursesRouter } from "./routers/courses"
import { LessonsRouter } from "./routers/lessons"
import { ProfessosrRouter } from "./routers/professors"
import { UsersRouter } from "./routers/users"

class jobTestApi {
  admin = new AdminRouter()
  course = new CoursesRouter()
  professors = new ProfessosrRouter()
  lessons = new LessonsRouter()
  users = new UsersRouter()
}

export const Api = new jobTestApi()