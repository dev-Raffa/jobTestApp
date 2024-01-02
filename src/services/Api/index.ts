
import { AdminRouter } from "./routers/admin"
import { CoursesRouter } from "./routers/courses"

class jobTestApi {
  course = new CoursesRouter()
  admin = new AdminRouter()

}

export const Api = new jobTestApi()