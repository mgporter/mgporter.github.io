import { LoaderFunction } from "react-router-dom"

export const projectLoader: LoaderFunction = ({ params }) => {
  return params.project || ""
}