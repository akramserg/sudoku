import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SubHeader from '../components/subHeader/SubHeader'
import { mockUseRouter, mockRouter } from '../__mocks__/next/router'
import Splash from '../pages/splash/Splash';


describe('Splash', () => {
    beforeEach(() => {
        jest.resetAllMocks()
    })

    it('renders Splash seccussfully!', () => {
        render(<Splash />)
        const splash = screen.getByRole("splash")
        expect(splash).toBeInTheDocument()
    })

    it('renders Start Button', () => {
        render(<Splash />)
        const button = screen.getByRole("button", {
            name: /start/i,
        })
        expect(button).toBeInTheDocument()
    })


    it('renders Show info Button', () => {
        render(<Splash />)
        const showInfoButton = screen.getByRole("button", {
            name: /Show info/i,
        })
        expect(showInfoButton).toBeInTheDocument()
    })

    it('calls router with /game/Game args when start is clicked', () => {
        render(<Splash />)
        const button = screen.getByRole("button", {
            name: /start/i,
        })
        button.click()

        expect(mockUseRouter).toHaveBeenCalled()
        expect(mockRouter).toHaveBeenCalledWith("/game/Game")

    })


})