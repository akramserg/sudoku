import { indexToRowCol, rowColToIndex } from "./common"

export const isBoardValidIndex = (board, index) => {
    while (index < 81) {
        if (!board[index]) {  //IF THE BLOCK IS EMPTY THEN MOVE TO THE NEXT ONE
            index++
            continue
        }

        const { row, col } = indexToRowCol(index)

        //CHECK IF THE ROWS ARE VALID
        for (let i = index + 1; i <= rowColToIndex(row, 8); i++) if (board[index] === board[i]) return false

        //CHECK IF THE COLUMNS ARE VALID
        for (let i = index + 9; i <= rowColToIndex(8, col); i += 9) if (board[index] === board[i]) return false


        //CHECK THE 3 * 3 BLOCK
        let r1 = Math.floor(row / 3) * 3;
        let c1 = Math.floor(col / 3) * 3;
        for (let r = r1; r < r1 + 3; ++r)
            for (let c = c1; c < c1 + 3; ++c)
                if (index != rowColToIndex(r, c) && board[rowColToIndex(r, c)] === board[index]) return false;

        //IF THIS INDEX PASSES MOVE TO THE NEXT UNTIL REACH THE END
        return isBoardValidIndex(board, index + 1)
    }

    //IF THE WHILE LOOP REACHES THE END WITHOUR FINDING AN INVALID VALUE THEN RETURN TRUE
    return true
}

