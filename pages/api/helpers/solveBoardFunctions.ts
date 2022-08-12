//THE METHODS HERE ARE BASED ON THIS IMPLEMENTATION
//https://lisperator.net/blog/javascript-sudoku-solver/

import { solveBrutefoceIndex } from "./bruteforce"
import { solveGreedyRecursive } from "./greedy"
import { isBoardValidIndex } from "./validBoard"


//IS BOARD VALID
//CHECKS IF THE CURRENT BOARD IS VALID WITHOUT SOLVING IT
export const isBoardValid = (board: number[]) => {
    return isBoardValidIndex(board, 0)//START WITH INDEX 0
}


//BRUTE FORCE WAY TO SOLVE THE BOARD
//CHECK EVERY POSSIBILITY~
export const solveBrutefoce = (board: number[]) => {
    return solveBrutefoceIndex(board, 0)//START WITH INDEX 0
}


//USE GREEDY SEARCH
export const solveGreedy = (board: number[]) => {
    return solveGreedyRecursive(board)
}
