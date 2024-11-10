import { RouteObject } from "react-router-dom"
import App from "./components/App"
import ProjectSection from "./components/ProjectSection"
import ProjectDetailsPage from "./components/projects/ProjectView"
import { projectLoader } from "./utils/loaders"


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
            path: ":project/",
            element: <ProjectDetailsPage />,
            loader: projectLoader
          }
        ]
      }
    ]
  }
]