import { useSelector } from 'react-redux'
import { createEmptyBoard, createRandomBoard, getPrevBoard, solveBoard, updateBoard } from '../../actions/board'
import Button from '../button/Button'
import StickyButton from '../stickyButton/StickyButton'
import { useAppDispatch } from '../../store/hooks'
import { getBoardFromText } from '../../helpers/game'
import styles from './SubHeader.module.scss'

const SubHeader = () => {

  const dispatch = useAppDispatch()
  const message = useSelector((state: any) => state.message) //GET MESSAGE FROM REDUCER
  const solveClicked = (algorithm) => dispatch(solveBoard(algorithm)) //DISPATCH SOLVEBOARD FROM ACTIONS
  const randomGameClicked = () => dispatch(createRandomBoard()) //DISPATCH CREATE RANDOM BOARD
  const undoClicked = () => dispatch(getPrevBoard()) //DISPATCH GET PREVIOUS BOARD 
  const emptyBoardClicked = () => dispatch(createEmptyBoard()) //DISPATCH CREATE EMPTY BOARD



  //ALLOW THE USER TO IMPORT A BOARD AS A TEXT
  const importBoardClicked = () => {
    const newBoardText = prompt("Paste your board here, make sure it has 81 blocks seperated by commas. You can either use 0s or empty space for empty blocks.")
    const newBoard = getBoardFromText(newBoardText)
    if (newBoard) dispatch(updateBoard(newBoard))
  }


  return (
    <div role="subheader" className={styles.container}>
      <div className={styles.button_section}>
        <StickyButton type="secondary" symbol='↻' onClick={undoClicked} />
        <Button text={'Solve G'} onClick={() => solveClicked("greedy")} />
        <Button text={'Solve'} onClick={() => solveClicked("")} />
        <Button text={'Random'} type={"secondary"} onClick={randomGameClicked} />
        <Button text={'Empty'} type={"secondary"} onClick={emptyBoardClicked} />
        <Button text={'Import'} type={"secondary"} onClick={importBoardClicked} />
      </div>
      <div role="message" className={styles.message}>{message}</div>

    </div>
  )
}


export default SubHeader
