
import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from "./Button"
import renderer from "react-test-renderer"

describe("Button.jsx testing", () => {

    test("render learn react link", () => {

        const text = "CLICK ME"
        render(<>
            <Button label={text} />

        </>)
        const btn = screen.getByText(text)
        expect(btn).toBeInTheDocument()

    })
    test("button should render with correct label", () => {

        const text = "CLICK ME"
        render(<>
            <Button label={text} />

        </>)
        const btn = screen.getByTestId('button')
        expect(btn.textContent).toBe(text)

    })

    it('should invoke a function when you click on it', () => {
        const fn = jest.fn()
        const text = "CLICK ME"
        render(<>
            <Button onClick={fn} label={text}></Button>

        </>)

        const btn = screen.getByTestId("button")
        fireEvent.click(btn)

        expect(fn).toHaveBeenCalled()
        expect(fn).toHaveBeenCalledTimes(1)

    })
    it('should match the snapshot', () => {
        const text = "Button"
        const tree = renderer.create(
            <Button onClick={() => { }} label={text} />
        )
        expect(tree).toMatchSnapshot()
    })
})