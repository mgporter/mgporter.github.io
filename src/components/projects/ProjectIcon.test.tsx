import { describe, test } from "vitest";
import { fireEvent, screen, within } from "@testing-library/react";
import { renderWithRouter } from "../../testutils/testutils";
import userEvent from "@testing-library/user-event";
import ProjectIcon from "./ProjectIcon";
import { projectContainers } from "./ProjectState";

describe("<IconHolder>", () => {

  test("the icon can be selected", async () => {

    const user = userEvent.setup()
    const onProjectSelectedMock = vitest.fn();
    
    renderWithRouter(
      <ProjectIcon 
        onProjectSelected={onProjectSelectedMock}
        projectContainer={projectContainers[0]}
        selected={false} />
    )

    const projectIcon = await screen.findByRole("button", {name: projectContainers[0].project.name})
    expect(projectIcon.ariaSelected).toBe("false")

    await user.click(projectIcon);

    expect(onProjectSelectedMock).toBeCalled()

  })

  test("the icon changes loading state when the image loads", async () => {

    const onProjectSelectedMock = vitest.fn();
    
    renderWithRouter(
      <ProjectIcon 
        onProjectSelected={onProjectSelectedMock}
        projectContainer={projectContainers[0]}
        selected={false} />
    )

    const projectIcon = await screen.findByRole("button", {name: projectContainers[0].project.name})
    expect(projectIcon.ariaBusy).toBe("true")

    const img = await within(projectIcon).findByRole("img")
    fireEvent.load(img)

    expect(projectIcon.ariaBusy).toBe("false")

  })

})