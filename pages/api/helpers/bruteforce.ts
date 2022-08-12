import { indexToRowCol, rowColToIndex } from "./common";

export const solveBrutefoceIndex = (board: number[], index: number) => {
    while (index < 81 && board[index]) ++index;  //MOVE TO THE FIRST NON EMPTY BLOCK
    if (index == 81) return board;               //SUCCESS, WHEN REACH THE LAST INDEX
    let moves = getPossibleMoves(index, board);
    for (let m of moves) {
        board[index] = m;                       //UPDATE THIS BLOCK AND SEE IF IT WORKS
        if (solveBrutefoceIndex(board, index + 1))   //RECURSIVELY CALL THE SAME FUNCTION AND MOVE TO THE NEXT INDEX
            return board;               //IF THE RETUREN IS NOT FALSE THEN IT IS THE END OF THE BOARD, SUCCESS
    }
    board[index] = 0;  // no move worked; we failed, clear the cell
    return false;      // and backtrack
}


//GET ALL THE POSSIBLE MOVES F
//TEST FROM 0 TO 9 AND RETURN THE ONES THAT ARE ACCEPTABLE
export const getPossibleMoves = (index: number, board: number[]) => {
    let possibleMoves: number[] = [];
    for (let value = 1; value <= 9; ++value)
        if (testMove(index, board, value))
            possibleMoves.push(value);
    return possibleMoves;
}


export const testMove = (index: number, board: number[], value: number) => {
    let { row, col } = indexToRowCol(index);


    for (let ri = 0; ri < 9; ++ri) // CHECK IF THE VALUE EXISTS IN THE SAME ROW
        if (board[rowColToIndex(ri, col)] == value) return false;

    for (let ci = 0; ci < 9; ++ci) // CHECK THE VALUE EXISTS IN THE SAME COLUMN
        if (board[rowColToIndex(row, ci)] == value) return false;

    // CHECK IF THE VALUE EXISTS IN THE SQUARE 3 * 3
    let ri = Math.floor(row / 3) * 3;
    let ci = Math.floor(col / 3) * 3;
    for (let r = ri; r < ri + 3; ++r) {
        for (let c = ci; c < ci + 3; ++c) {
            if (board[rowColToIndex(r, c)] == value) return false;
        }
    }

    //IF NON OF THE ABOVE RETURNED FALSE THEN THE MOVE IS VALID
    return true;
}
