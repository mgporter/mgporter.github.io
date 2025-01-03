import { screen } from "@testing-library/dom"
import { renderWithRouter } from "../testutils/testutils"
import Nav, { navOptions } from "./Nav"
import userEvent from '@testing-library/user-event'

describe("<Nav>", () => {

  test("it renders", async () => {
    renderWithRouter(<Nav />)

    expect(await screen.findByText("mgporter")).toBeDefined();
  })

  test("Nav options can be selected", async () => {
    const user = userEvent.setup()

    renderWithRouter(<Nav />)

    const button1 = await screen.findByRole("button", {name: /python/i});
    const button2 = await screen.findByRole("button", {name: /featured/i});

    expect(button1.ariaSelected).toBe("false")
    expect(button2.ariaSelected).toBe("false")

    await user.click(button1)

    expect(button1.ariaSelected).toBe("true")
    expect(button2.ariaSelected).toBe("false")

  })

  test("Nav options are all rendered", async () => {
    const navOptionCount = navOptions.length
    
    renderWithRouter(<Nav />)

    expect(navOptionCount).toBeGreaterThan(1)

    expect((await screen.findAllByRole("button", { name: "NavButton" })).length).toBe(navOptionCount)
  })

  test("Enable effects button can be turned on and off", async () => {
    const user = userEvent.setup()

    renderWithRouter(<Nav />)

    const button = await screen.findByRole("switch", { name: "Enable fancy effects"});

    expect(button.ariaSelected).toBe("true")

    await user.click(button)

    expect(button.ariaSelected).toBe("false")

    await user.click(button)

    expect(button.ariaSelected).toBe("true")

  })

})