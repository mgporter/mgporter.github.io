import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../public/stylesheets/index.css'
import '../public/stylesheets/projecttransition.css'
import '../public/stylesheets/swipe.css'
import { setStyles } from './setstyles.ts'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { routesConfig } from './routes.tsx'

const router = createHashRouter(routesConfig)

setStyles()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
