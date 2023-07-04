// Testing components that rely on redux

import { screen } from "@testing-library/react";

// We no longer use render of @testing-library/react, we use our custom render for redux
import { renderWithProviders } from "../../../utilities/tests/test-utils";

import CartIcon from "../CartIcon"

describe("Cart icon tests", () => {
    test("Use preloaded state to render", () => {
        const initialCartItems = [
            {id: 1, name: "Item A", imageUrl: "test", price: 10, quantity: 1},
            {id: 2, name: "Item B", imageUrl: "test", price: 10, quantity: 2}
        ]

        renderWithProviders(<CartIcon />, {   // we used our custom render with redux to be able to test a state using (preloadedState)
            preloadedState: {
                cart: {    // the slice name
                    value: initialCartItems  // the state needed to be modified to test
                }
            }
        })

        const cartIconElement = screen.getByText("3")
        expect(cartIconElement).toBeInTheDocument()
    })
})