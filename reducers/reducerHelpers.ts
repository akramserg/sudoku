
//ADD BOARD TO PREVIOUS BOARDS AND RETURN THE LAST 10
export const newPrevBoards = (prevBoards, board) => {
    if (!board) return []
    return [...prevBoards, board].splice(0, 10)
}

//POP THE LAST BOARD FROM THE LIST
export const prevBoardsPop = (oldPrevBoards) => {
    const prevBoards = [...oldPrevBoards]
    const lastBoard = prevBoards.pop()
    return { lastBoard, prevBoards }
}