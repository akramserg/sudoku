import { render, screen } from '@testing-library/react'
import StickyButton from '../components/stickyButton/StickyButton'
import '@testing-library/jest-dom'

const buttonOnClick = jest.fn(() => { })

describe('Sticky Button', () => {
    beforeEach(() => {
        jest.resetAllMocks()
    })

    it('renders the button', () => {
        render(<StickyButton onClick={buttonOnClick} symbol={'↻'} />)
        const button = screen.getByRole("stickybutton")
        expect(button).toBeInTheDocument()
    })


    it('renders the button text', () => {
        render(<StickyButton onClick={buttonOnClick} symbol={'↻'} />)
        const button = screen.getByRole("stickybutton")
        expect(button.textContent).toBe("↻")
    })


    it('Calls function when clicked', () => {
        render(<StickyButton onClick={buttonOnClick} symbol={'↻'} />)
        const button = screen.getByRole("stickybutton")
        button.click()
        expect(buttonOnClick).toHaveBeenCalledTimes(1)
    })


})