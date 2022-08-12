import { render, screen } from '@testing-library/react'
import Button from '../components/button/Button'
import Header from '../components/header/Header'
import '@testing-library/jest-dom'


describe('Header', () => {
    beforeEach(() => {
        jest.resetAllMocks()
    })

    it('renders the header', () => {
        render(<Header title={'title'} />)
        const header = document.querySelector("h1")
        expect(header).toBeInTheDocument()
    })


    it('renders the header text', () => {
        render(<Header title={'title'} />)
        const header = document.querySelector("h1")
        expect(header.textContent).toBe("title")
    })

})