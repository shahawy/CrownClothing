import { render, screen } from "@testing-library/react"
import Button from "../Button"

describe("button tests", () => {
    test("should render base button when nothing is passed", () => {
        render(<Button buttonType="inverted" />);
        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toHaveStyle("background-color: ButtonFace;");
    })
})