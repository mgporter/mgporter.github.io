import App from "./App"
import Main from "./components/Main"

export const routesConfig = [
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
]