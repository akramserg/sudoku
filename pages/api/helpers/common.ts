

// CONVERT FROM INDEX 0 - 80 TO ROW AND COLUMNS
export const indexToRowCol = (index: number) => ({ row: Math.floor(index / 9), col: index % 9 })

//CONVERT FROM ROW AND COLUMN TO INDEX 0-
export const rowColToIndex = (row: number, col: number) => row * 9 + col



export const acceptable = (board, index, value) => {
    let { row, col } = indexToRowCol(index);

    // if already present on the column, not acceptable
    for (let r = 0; r < 9; ++r)
        if (board[rowColToIndex(r, col)] == value) return false;

    // if already present on the row, not acceptable
    for (let c = 0; c < 9; ++c)
        if (board[rowColToIndex(row, c)] == value) return false;

    // if already present in the same 3x3 square, also not acceptable
    let r1 = Math.floor(row / 3) * 3;
    let c1 = Math.floor(col / 3) * 3;
    for (let r = r1; r < r1 + 3; ++r) {
        for (let c = c1; c < c1 + 3; ++c) {
            if (board[rowColToIndex(r, c)] == value) return false;
        }
    }

    // we have a "go"
    return true;
}


