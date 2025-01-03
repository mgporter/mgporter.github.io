import { screen } from "@testing-library/dom"
import { renderWithRouter } from "../testutils/testutils"
import ProjectSection from "./ProjectSection"
import App from "./App"

describe.skip("<ProjectSection>", () => {

  test("it renders", async () => {
    renderWithRouter(<ProjectSection />)

    await screen.findByText("projects")
  })

  test("whole project section", async () => {
    renderWithRouter(<App />, "/projects")

    await screen.findByText("projects")

    expect(screen.getAllByTestId("projecticon").length).toBe(21)
  })

})