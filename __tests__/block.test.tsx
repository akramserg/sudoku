import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Block from '../pages/game/components/block/Block'

const mockUseSelector = jest.fn(() => { })
const mockUpdateBlock = jest.fn(() => { })
const mockUseAppDispatch = jest.fn(() => { })

jest.mock('react-redux', () => ({ useSelector: () => { mockUseSelector() } }));
jest.mock('../actions/board', () => ({ updateBlock: () => { mockUpdateBlock() } }));
jest.mock('../store/hooks', () => ({ useAppDispatch: () => { mockUseAppDispatch() } }));


describe('Block', () => {
    beforeEach(() => {
        jest.resetAllMocks()
    })

    it('renders the block', () => {
        render(<Block value={0} rowi={0} coli={0} />)
        const block = screen.getByRole("block")
        expect(block).toBeInTheDocument()
    })


    it('renders the block text, empty if the value passed zero', () => {
        render(<Block value={0} rowi={0} coli={0} />)
        const block = screen.getByRole("block")
        expect(block.textContent).toBe("")
    })



    it('renders the block text, renders the passed value if it is not zero', () => {
        render(<Block value={4} rowi={0} coli={0} />)
        const block = screen.getByRole("block")
        expect(block.textContent).toBe("4")
    })

  


})