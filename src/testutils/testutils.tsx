import { render } from "@testing-library/react";
import { createMemoryRouter, RouteObject, RouterProvider } from "react-router-dom";

// Implementation based on https://webup.org/blog/how-to-avoid-mocking-in-react-router-v6-tests/

export function renderWithRouter(
  element: React.ReactElement, 
  path: string = "/",
  otherElements: RouteObject[] = []
) {

  const routeObject = { element, path }

  const router = createMemoryRouter([routeObject, ...otherElements], {
    initialEntries: [path],
    initialIndex: 1,
  });
  return render(<RouterProvider router={router} />);
}

export function renderAppSection(
  element: React.ReactElement, 
  path: string = "/",
  otherElements: RouteObject[] = []
) {

  const routeObject = { element, path }

  const router = createMemoryRouter([routeObject, ...otherElements], {
    initialEntries: [path],
    initialIndex: 1,
  });
  return render(<RouterProvider router={router} />);
}