import { RouteObject } from "react-router-dom"
import App from "./App"
import ProjectSection from "./components/ProjectSection"
import ProjectDetailsPage, { projectLoader } from "./components/projects/ProjectView"


export const routesConfig: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <div>There was an error</div>,
    children: [
      {
        path: "projects",
        element: <ProjectSection />,
        children: [
          {
            path: ":project",
            element: <ProjectDetailsPage />,
            loader: projectLoader
          }
        ]
      }
    ]
  }
]