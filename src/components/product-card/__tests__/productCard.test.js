// Testing components that rely on redux

import { screen, fireEvent } from "@testing-library/react";

// We no longer use render of @testing-library/react, we use our custom render for redux
import { renderWithProviders } from "../../../utilities/tests/test-utils";

import ProductCard from "../ProductCard";


describe("Testing Product Card component", () => {

    test("Should add the product item when the product card button is clicked", () => { // Used async because (fireEvent) method is asynchronus
        const mockItem = {
            id: 1, 
            imageUrl: "test",
            name: "Item A",
            price: 10
        }

        const {store} = renderWithProviders(<ProductCard />, {  // we can access the store by destructuring it from (renderWithProviders)
            preloadedState: {
                cart: {
                    value: []
                },
                user: {
                    value: {}
                }
            }
        })

        const addToCartButton = screen.getByText("Add To Cart")
        fireEvent.click(addToCartButton)  // (fireEvent) is an object that has all (EventListeners) of javaScript

        expect(store.getState().cart.value.length).toBe(1)
    })  // the store, getState(): to access the states of the slices, slice name, required state
})