import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { borad2Rows } from '../../../../helpers/game'
import styles from './GameBoard.module.scss'
import GameRow from '../gameRow/GameRow'
import { createEmptyBoard } from '../../../../actions/board'
import { useAppDispatch } from '../../../../store/hooks'
import { StateReducer } from '../../../../reducers/board'

const GameBoard = () => {
  const dispatch = useAppDispatch()
  const board = useSelector((state: StateReducer) => state.board)  //GET BOARD FROM THE REDUCER
  const [rowList, setRowList] = useState<any[]>([])   //TO HOLD THE ROWS OF THE BOARD

  useEffect(() => {
    //IF THERE IS A BOARD THEN DIVIDE IT INTO ROWS
    //IF THERE IS NO BOARD THEN CREATE AND EMPTY BOARD
    board ? setRowList(borad2Rows(board)) : dispatch(createEmptyBoard())
  }, [board, dispatch])

  return (
    <div role="gameboard" className={styles.container}>
      {rowList.map((value, rowi) =>
        <GameRow key={rowi} rowValues={value} rowi={rowi} />
      )}
    </div>
  )
}

export default GameBoard 