import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../public/stylesheets/index.css'
import App from './App.tsx'
import { setStyles } from './setstyles.ts'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { routesConfig } from './routes.tsx'

const router = createHashRouter(routesConfig)

setStyles()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
