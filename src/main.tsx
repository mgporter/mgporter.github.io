import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import './css/projecttransition.css'
import './css/swipe.css'
import { setStyles } from './utils/setstyles.ts'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { routesConfig } from './routes.tsx'

const router = createHashRouter(routesConfig)

setStyles()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
