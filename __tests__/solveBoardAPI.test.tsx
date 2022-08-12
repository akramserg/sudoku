import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { isBoardValid, solveBrutefoce, solveGreedy } from '../pages/api/helpers/solveBoardFunctions'


const validBoard = [
    0, 0, 0, 0, 1, 7, 2, 0, 0,
    0, 0, 0, 4, 0, 0, 0, 0, 0,
    0, 0, 9, 0, 0, 3, 0, 0, 0,

    4, 0, 0, 7, 8, 0, 5, 0, 0,
    0, 2, 5, 0, 0, 0, 8, 0, 0,
    0, 0, 0, 6, 0, 0, 0, 0, 0,

    6, 0, 1, 5, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 6, 0, 3, 0,
    2, 0, 0, 0, 0, 1, 7, 0, 4
]

const inValidBoard = [
    0, 9, 0, 0, 1, 7, 2, 0, 0,
    0, 0, 0, 4, 0, 0, 0, 0, 0,
    0, 0, 9, 0, 0, 3, 0, 0, 0,

    4, 0, 0, 7, 8, 0, 5, 0, 0,
    0, 2, 5, 0, 0, 0, 8, 0, 0,
    0, 0, 0, 6, 0, 0, 0, 0, 0,

    6, 0, 1, 5, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 6, 0, 3, 0,
    2, 0, 0, 0, 0, 1, 7, 0, 4
]

describe('Solve Board API', () => {
    beforeEach(() => {
        jest.resetAllMocks()
    })


    it('Detects a valid board', () => {
        const sb = isBoardValid(validBoard)
        expect(sb).toBeTruthy()
    })

    it('Detects an invalid board', () => {
        const sb = isBoardValid(inValidBoard)
        expect(sb).toBeFalsy()
    })




    it('Solves with bruteforce', () => {
        const sb = solveBrutefoce(validBoard)
        expect(sb).not.toBeFalsy()
    })

    it('Solves with greedy search', () => {
        const sb = solveGreedy(validBoard)
        expect(sb).not.toBeFalsy()
    })





})