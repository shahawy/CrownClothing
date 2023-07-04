import { renderWithProviders } from "../../../utilities/tests/test-utils";
import { screen } from "@testing-library/react";
import NavigationBar from "../NavigationBar";

describe("Test Navigation Bar", () => {
  test("Render Sign In link if there is no users", () => {
    renderWithProviders(<NavigationBar />, {
      preloadedState: {
        user: {
          value: null,
        },
      },
    });

    const signInlinkElement = screen.getByText("SIGN IN");
    expect(signInlinkElement).toBeInTheDocument();
  });

  test("Should not render Sign Out link and not Sign In if there is current user", () => {
    renderWithProviders(<NavigationBar />, {
      preloadedState: {
        user: {
          value: {},
        },
      },
    });

    const signOutlinkElement = screen.getByText("SIGN OUT");
    expect(signOutlinkElement).toBeInTheDocument();

    const signInlinkElement = screen.queryByText("SIGN IN");
    expect(signInlinkElement).toBeNull();
  });    // The difference between (getByText) and (queryByText) is that, when (queryByText) finds nothing it gives null,
});      // but when (getByText) finds nothing it throws an error
