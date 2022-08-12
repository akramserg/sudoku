import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import GameBoard from '../pages/game/components/gameBoard/GameBoard'

//MOCK GAME ROW
jest.mock("../pages/game/components/gameRow/GameRow", () => {
    return {
        __esModule: true,
        default: () => { return <div role="gamerow"></div> }
    }
})

jest.mock('../store/hooks', () => ({
    useAppDispatch: () => {}
}));



describe('Game Board', () => {
    beforeEach(() => {
        jest.resetAllMocks()
    })

    it('renders game board', () => {
        render(<GameBoard />)
        const gameBoard = screen.getByRole("gameboard")
        expect(gameBoard).toBeInTheDocument()
    })


    it('renders 9 game rows', () => {
        render(<GameBoard />)
        const gameRow = screen.getAllByRole("gamerow")
        expect(gameRow).toHaveLength(9)
    })


})