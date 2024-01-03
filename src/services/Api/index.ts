
import { AdminRouter } from "./routers/admin"
import { CoursesRouter } from "./routers/courses"
import { ProfessosrRouter } from "./routers/professors"

class jobTestApi {
  admin = new AdminRouter()
  course = new CoursesRouter()
  professors = new ProfessosrRouter()
}

export const Api = new jobTestApi()