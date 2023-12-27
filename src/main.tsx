import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routers'
import { Providers } from './providers'
import { defineCustomElements } from 'kyra-components-react'

defineCustomElements()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={routers} />
    </Providers>
  </React.StrictMode>,
)
