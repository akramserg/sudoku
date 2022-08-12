import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import GameRow from '../pages/game/components/gameRow/GameRow';



jest.mock("../pages/game/components/block/Block", () => {
    return {
        __esModule: true,
        default: () => { return <div role="block"></div> }

    }
})
describe('Game Row', () => {
    beforeEach(() => {
        jest.resetAllMocks()
    })

    it('renders the game row', () => {
        render(<GameRow rowValues={[1, 2, 3, 4, 5, 6, 7, 8, 9]} rowi={0} />)
        const gameRow = screen.getByRole("gamerow")
        expect(gameRow).toBeInTheDocument()
    })

    it('renders 9 blocks', () => {
        render(<GameRow rowValues={[1, 2, 3, 4, 5, 6, 7, 8, 9]} rowi={0} />)
        const gameRow = screen.getAllByRole("block")
        expect(gameRow).toHaveLength(9)
    })

})