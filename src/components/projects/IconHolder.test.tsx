import { describe, test } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../testutils/testutils";
import IconHolder from "./IconHolder";
import { MutableRefObject } from "react";
import userEvent from "@testing-library/user-event";
import { projectContainers } from "./ProjectState";

describe("<IconHolder>", () => {

  test("all projects are rendered", async () => {
    
    const refMock: MutableRefObject<HTMLDivElement> = { current: document.createElement("div") }
    const onProjectSelectedMock = vitest.fn();

    renderWithRouter(
      <IconHolder iconHolderRef={refMock} onProjectSelected={onProjectSelectedMock} />
    )

    const buttons = await screen.findAllByRole("button")

    expect(buttons.length).toBe(projectContainers.length)

  })

  test("onProjectSelected is called when a project is selected", async () => {

    const user = userEvent.setup()

    const refMock: MutableRefObject<HTMLDivElement> = { current: document.createElement("div") }
    const onProjectSelectedMock = vitest.fn();

    renderWithRouter(
      <IconHolder iconHolderRef={refMock} onProjectSelected={onProjectSelectedMock} />
    )

    const projectIcon = await screen.findByRole("button", {name: /oppia/i})
    expect(projectIcon.ariaSelected).toBe("false")

    await user.click(projectIcon);

    expect(onProjectSelectedMock).toBeCalled()

  })

})