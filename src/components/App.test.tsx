import { screen } from "@testing-library/react"
import App from './App'
import { renderWithRouter } from '../testutils/testutils'

describe("App", () => {

  test("forwards to /projects on load", async () => {

    renderWithRouter(
      <App />,
      "/",
      [{
        element: <p>test projects page</p>,
        path: "/projects"
      }]
    )

    expect(await screen.findByText("test projects page")).toBeDefined();

  })

})
