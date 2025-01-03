import { describe, it } from "vitest";
import ProjectView from "./ProjectView";
import { renderWithRouter } from "../../testutils/testutils";

describe.skip("<ProjectView>", () => {

  it("renders /project ", () => {

    renderWithRouter(
      <ProjectView />
    )

  })

})