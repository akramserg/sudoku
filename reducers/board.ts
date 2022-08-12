//ROOT REDUCER
/*
HAS THE VALUE OF BOARD AND PREVIOUS BOARD LIST
*/

import * as constants from '../actions/constants'
import { GameBoard } from '../types/types'
import { newPrevBoards, prevBoardsPop } from './reducerHelpers'


export interface StateReducer {
  board: GameBoard | null
  prevBoards: GameBoard[] //USED FOR UNDO BUTTON
  loading: boolean
  message: string
}

const initialState = {
  board: null,
  prevBoards: [],
  loading: false,
  message: ""
}


const boardReducer = (state: StateReducer = initialState, action) => {
  switch (action.type) {

    case constants.CREATE_RANDOM_BOARD:
      return Object.assign({}, state, { board: action.board, prevBoards: newPrevBoards(state.prevBoards, state.board), loading: true, message: "" })

    case constants.CREATE_EMPTY_BOARD:
      return Object.assign({}, state, { board: action.board, prevBoards: newPrevBoards(state.prevBoards, state.board), loading: true, message: "" })

    case constants.GET_PREV_BOARD:
      const { lastBoard, prevBoards } = prevBoardsPop(state.prevBoards)
      if (lastBoard === null) return state
      return Object.assign({}, state, { board: lastBoard, prevBoards: prevBoards, loading: true, message: "" })

    case constants.UPDATE_BOARD:
      return Object.assign({}, state, { board: action.board, loading: true, message: "", prevBoards: newPrevBoards(state.prevBoards, state.board) })

    case constants.UPDATE_ELEMENT:
      return Object.assign({}, state, { rowi: action.rowi, coli: action.coli, board: action.board, loading: true, message: "", prevBoards: newPrevBoards(state.prevBoards, state.board), })

    case constants.SOLVE_BOARD_TRY:
      return Object.assign({}, state, { loading: "Loading", message: "Waiting for the server to solve the board" })

    case constants.SOLVE_BOARD_ERROR:
      return Object.assign({}, state, { loading: false, message: "Waiting for the server to solve the board" })

    case constants.SOLVE_BOARD_RESPONSE:
      if (action.response.success) {
        return Object.assign({}, state, { board: action.response.board, loading: false, prevBoards: newPrevBoards(state.prevBoards, state.board), message: action.response.message })
      } else {
        return Object.assign({}, state, { loading: false, message: action.response.message })
      }

    default:
      return state
  }

}


export default boardReducer 