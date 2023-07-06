// Testing components that rely on redux

import { screen, fireEvent, waitFor } from "@testing-library/react";  // waitFor: is used when testing functions that are waiting asynchronus functions to be completed

// We no longer use render of @testing-library/react, we use our custom render for redux
import { renderWithProviders } from "../../../utilities/tests/test-utils";

import NavigationBar from "../NavigationBar";
import * as reactRedux from 'react-redux';


describe("Test Navigation Bar", () => {
  
  test("Render Sign In link and not Sign Out if there is no users", () => {
    renderWithProviders(<NavigationBar />, {   // we used our custom render with redux to be able to test a state using (preloadedState)
      preloadedState: {
        user: {    // the slice name
          value: null,  // the state needed to be modified to test
        },
      },
    });

    const signInLinkElement = screen.getByText("SIGN IN");
    expect(signInLinkElement).toBeInTheDocument();

    const signOutLinkElement = screen.queryByText("SIGN OUT");
    expect(signOutLinkElement).toBeNull();
  });    // The difference between (getByText) and (queryByText) is that, when (queryByText) finds nothing it gives null,
         // but when (getByText) finds nothing it throws an error


  test("Should not render Sign Out link and not Sign In if there is current user", () => {
    renderWithProviders(<NavigationBar />, {
      preloadedState: {
        user: {
          value: {},
        },
      },
    });

    const signOutLinkElement = screen.getByText("SIGN OUT");
    expect(signOutLinkElement).toBeInTheDocument();

    const signInLinkElement = screen.queryByText("SIGN IN");
    expect(signInLinkElement).toBeNull();
  });


  test("Should not render CartDropdown when isCartOpen is false", () => {
    renderWithProviders(<NavigationBar />, {
      preloadedState: {
        cart: {
          isCartOpen: false
        },
      },
    });

    const buttonElement = screen.queryByText("Go To Checkout");
    expect(buttonElement).toBeNull();
  });


  test("Should render CartDropdown when isCartOpen is true and not show empty cart when there is items", () => {
    const initialCartItems = [{id: 1, name: "Item A", imageUrl: "test", price: 10, quantity: 1}]

    renderWithProviders(<NavigationBar />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          value: initialCartItems
        },
      },
    });

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();    // To be sure that CartDropdown component is rendered

    const emptyCartElement = screen.queryByText("Your Cart is empty");
    expect(emptyCartElement).toBeNull();    // To be sure that Cart is not empty when there is items in it
  });


  test("Should render CartDropdown when isCartOpen is true and show empty cart when there is no items", () => {
    renderWithProviders(<NavigationBar />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          value: []
        },
      },
    });

    const buttonElement = screen.getByText("Go To Checkout");
    expect(buttonElement).toBeInTheDocument();    // To be sure that CartDropdown component is rendered

    const emptyCartElement = screen.getByText("Your Cart is empty");
    expect(emptyCartElement).toBeInTheDocument();    // To be sure that Cart is empty when there is no items in it
  });


  test("Should dispatch setCurrentUser and clearTheWholeCart actions on clicking the SIGN OUT link", async () => {
    const {store} = renderWithProviders(<NavigationBar />, {
      preloadedState: {
        user: {
          value: {}  // To be sure that SIGN OUT is rendered
        }
      }
    })

    const signOutLinkElement = screen.getByText("SIGN OUT")
    fireEvent.click(signOutLinkElement)

    await waitFor(() => {
    expect(store.getState().user.value).toBeNull()
    expect(store.getState().cart.value).toEqual([])
    })
  })

});

  
