// ------- ACTIONS BOARD --------
/*
 HAS ALL THE FUNCTIONS THAT DEAL WITH UPDATING AND GENERATING BOARDS SO THAT 
THEY CAN BE DISPATCHED FROM ANYWHERE IN THE CODE
*/

import * as constants from "./constants"



//EMPTY THE BOARD
export const createEmptyBoard = () => {
  const emptyBoard = new Array<number>(81).fill(0)
  return {
    type: constants.CREATE_EMPTY_BOARD,
    board: emptyBoard
  }
}

export const createRandomBoard = () => {
  const randomBoard = []
  for (let i = 0; i < 81; i++) {
    randomBoard.push(createRandomBlock())
  }
  return {
    type: constants.CREATE_RANDOM_BOARD,
    board: randomBoard
  }
}


const createRandomBlock = () => {
  const randomValue = Math.floor(Math.random() * 80)
  if (randomValue > 9) return 0
  else return randomValue
}




export const updateBoard = (board: number[]) => {
  return {
    type: constants.UPDATE_BOARD,
    board: board
  }
}


export const updateBlock = (board: number[], rowi: number, coli: number, newValue: number) => {
  const tempBoard = [...board]
  tempBoard[rowi * 9 + coli] = newValue
  return {
    type: constants.UPDATE_ELEMENT,
    board: tempBoard,
    rowi, coli
  }
}


export const getPrevBoard = () => ({
  type: constants.GET_PREV_BOARD
})





export const solveBoard = (algorithm?: string) => {
  return async (dispatch: any, getState: any) => {
    dispatch({
      type: constants.SOLVE_BOARD_TRY
    })
    const board = getState().board
    try {
      const res = await fetch("/api/solveboard", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          board: board,
          algorithm
        }) // body data type must match "Content-Type" header
      });
      const response = await res.json(); // parses JSON response into native JavaScript objects
      return dispatch({
        type: constants.SOLVE_BOARD_RESPONSE,
        response: response
      })

    } catch (error) {
      return dispatch({
        type: constants.SOLVE_BOARD_ERROR,
        error: error
      })
    }

  }
}


// // return new Promise<{ data: { board?: number[], success: boolean } }>((resolve, reject) => {
// //   const result = solveFromIndex(0, board)
// //   if (result)
// //     return resolve({ data: { board: board, success: true } });
// //   else
// //     return reject({ data: { board: null, success: false } });
// // })
// export const solveBoard = (board: number[]) => {


//   fetch('/api/board/solveBoardAPI')
//     .then((res) => res.json())
//     .then((data) => {
//       setData(data)
//       setLoading(false)
//     })
// }



