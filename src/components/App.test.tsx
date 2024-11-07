import { describe, test } from 'vitest'
import { render, screen } from "@testing-library/react"
import App from './App'

describe("App", () => {

  test("App renders", () => {

    render(<App />)

    screen.debug()

  })


})
