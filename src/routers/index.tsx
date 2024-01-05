import {createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/home/page'
import { CoursePage } from '../pages/course'
import { LayoutAdmin } from '../pages/admin/layout'
import { AuthAdmin } from '../pages/admin/subpages/auth'
import { CoursesAdmin } from '../pages/admin/subpages/courses'
import { ProfessorsAdmin } from '../pages/admin/subpages/professors'
import { UserAuthPage } from '../pages/user/subpages/auth/page'


export const routers = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path:'courses/:courseId',
    element: <CoursePage />
  },
  {
    path:'auth/admin',
    element: <AuthAdmin />
  },
  {
    path:'admin',
    element: <LayoutAdmin />,
    children: [
      {
        path:'courses',
        element: <CoursesAdmin />
      },
      {
        path:'professors',
        element: <ProfessorsAdmin />
      }
    ]
  },
  {
    path:'auth/user/:action',
    element: <UserAuthPage />
  }
])