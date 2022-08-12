
export const borad2Rows = (board: number[]) => {
  const rl = []
  for (let i = 0; i < 9; i++) {
    rl.push(board.slice(i * 9, i * 9 + 9))
  }
  return rl
}


//CHECK AND EXTRACT BOARD FROM TEXT
export const getBoardFromText = (newBoardText: string) => {
  if (newBoardText === null) return
  const blocks = newBoardText.split(",");
  if (blocks.length != 81) {
    alert("The length of the board is incorrect!")
    return false
  }

  const newBoard = []
  for (let i = 0; i < 81; i++) {
    if (blocks[i] === "") newBoard.push(0)
    const num = Number(blocks[i]);
    if (Number.isInteger(num) && num >= 0 && num <= 9) newBoard.push(num)
    else {
      alert("At least one block is neither a 0-9 number or empty space!")
      return false
    }
  }
  return newBoard
}