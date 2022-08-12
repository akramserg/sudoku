import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SubHeader from '../components/subHeader/SubHeader'
import { mockUseSelector } from '../__mocks__/react-redux'

jest.mock('../store/hooks', () => ({ useAppDispatch: () => { } }));


describe('Header', () => {
    beforeEach(() => {
        jest.resetAllMocks()
    })

    it('renders the header', () => {
        render(<SubHeader />)
        const subheader = screen.getByRole("subheader")
        expect(subheader).toBeInTheDocument()
    })


    it('calles useSelector updates message. renders the message text', () => {
        render(<SubHeader />)
        const message = screen.getByRole("message")
        expect(mockUseSelector).toHaveBeenCalledTimes(1)
        expect(message.textContent).toBe("new message")
    })

})