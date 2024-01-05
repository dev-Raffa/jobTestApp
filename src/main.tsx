import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routers'
import { Providers } from './providers'
import { defineCustomElements } from 'kyra-components-react'
import { LessonsModalProvider } from './pages/course/providers/lesson-modal'

defineCustomElements()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <LessonsModalProvider>
        <RouterProvider router={routers} />
      </LessonsModalProvider>
    </Providers>
  </React.StrictMode>,
)
