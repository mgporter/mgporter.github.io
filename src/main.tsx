import { render } from 'preact'
import { App } from './app.tsx'
import './stylesheets/index.css'
import './stylesheets/projecttransition.css'
import './stylesheets/swipe.css'
import { setStyles } from './setstyles.ts'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Main from './components/Main.tsx'

const router = createHashRouter([
  {
    path: "*",
    element: <App />,
    errorElement: <div>There was an error</div>,
    children: [
      {
        path: "projects",
        element: <Main />,
        children: [
          {
            path: ":project",
            element: <Main />
          }
        ]
      }
    ]
  }
]);

setStyles();

render(<RouterProvider router={router} />, document.getElementById('app')!)
