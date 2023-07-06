import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../../utilities/tests/test-utils";

import CategoriesPreview from "../CategoriesPreview"



describe("Testing CategoriesPreview component", () => {

    test("Should render a spinner if status equals loading", () => {

        renderWithProviders(<CategoriesPreview />, {
            preloadedState: {
                categories: {
                    status: "loading",
                    items: {}
                }
            }
        })

        const spinnerElement = screen.getByTestId("spinner")
        expect(spinnerElement).toBeInTheDocument()
    })


    test("Should render categories if status equals succeeded", () => {

        renderWithProviders(<CategoriesPreview />, {
            preloadedState: {
                categories: {
                  status: "succeeded",
                  items: {
                    mens: [
                      {id: 1, name: "product 1"},
                      {id: 2, name: "product 2"},
                      {id: 3, name: "product 3"},
                      {id: 4, name: "product 4"},
                    ]
                  }
                }
              }
        })

        const titleElement = screen.getByText("MENS")
        expect(titleElement).toBeInTheDocument()
    })

})