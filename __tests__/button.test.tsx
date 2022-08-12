import { render, screen } from '@testing-library/react'
import Button from '../components/button/Button'
import '@testing-library/jest-dom'

const buttonOnClick = jest.fn(() => { })

describe('Button', () => {
    beforeEach(() => {
        jest.resetAllMocks()
    })
    
    it('renders the button', () => {
        render(<Button text={'button text'} onClick={buttonOnClick} />)
        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument()
    })


    it('renders the button text', () => {
        render(<Button text={'button text'} onClick={buttonOnClick} />)
        const button = screen.getByRole("button")
        expect(button.textContent).toBe("button text")
    })


    it('Calls function when clicked', () => {
        render(<Button text={'button text'} onClick={buttonOnClick} />)
        const button = screen.getByRole("button")
        button.click()
        expect(buttonOnClick).toHaveBeenCalledTimes(1)
    })


})