import { acceptable, indexToRowCol, rowColToIndex } from "./common";

export const solveGreedyRecursive = (board: number[]) => {
    let { index, moves } = bestCell(board);   //GET BEST CELLS AND MOVES
    if (index === null || index === undefined) return board;
    for (let m of moves) {  //TRY MOVES
        board[index] = m;
        if (solveGreedyRecursive(board)) return board;     //BOARD IS SOLVES
    }
    board[index] = 0;       //NO IMPROVEMENTS, BACKTRACK
    return false;
}



//GET THE CELLS WITH AS FEW POSSIBILITIES AS POSSIBLE
function bestCell(board) {
    let index, moves, fewestPossibilitys = 10;
    for (let i = 0; i < 81; ++i) {
        if (!board[i]) {
            let m = getPossibleMoves(board, i);
            if (m.length < fewestPossibilitys) {
                fewestPossibilitys = m.length;
                moves = m;
                index = i;
                if (fewestPossibilitys == 0) break;
            }
        }
    }
    return { index, moves };
}



function getPossibleMoves(board, index) {
    let choices = [];
    for (let value = 1; value <= 9; ++value) {
        if (acceptable(board, index, value)) {
            if (unique(board, index, value))
                return [value];
            else
                choices.push(value);
        }
    }
    return choices;
}


function unique(board, index, value) {
    let { row, col } = indexToRowCol(index);
    let r1 = Math.floor(row / 3) * 3;
    let c1 = Math.floor(col / 3) * 3;
    for (let r = r1; r < r1 + 3; ++r) {
        for (let c = c1; c < c1 + 3; ++c) {
            let i = rowColToIndex(r, c);
            if (i != index && !board[i] && acceptable(board, i, value)) {
                return false;
            }
        }
    }
    return true;
}

