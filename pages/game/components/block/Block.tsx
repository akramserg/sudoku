import { useState } from 'react'
import { useSelector } from 'react-redux'
import { updateBlock } from '../../../../actions/board'
import Numpad from '../../../../components/numpad/Numpad'
import { StateReducer } from '../../../../reducers/board'
import { useAppDispatch } from '../../../../store/hooks'
import styles from './Block.module.scss'

interface Props {
  value: number | null
  rowi: number
  coli: number
}
const Block = (props: Props) => {
  const [shownumpad, setShownumpad] = useState<boolean>(false);

  const dispatch = useAppDispatch()
  const board = useSelector((state: StateReducer) => state.board)  //GET BOARD FROM REDUCER


  //CHECK IF THE BLOCK HAS NO VALUE AKA ZERO
  const isBlockEmpty = () => props.value === 0

  const numpadClicked = (num) => {
    dispatch(updateBlock(board, props.rowi, props.coli, num))
    setShownumpad(false)
  }



  return (
    <div>
      <div role="block"
        onClick={() => { setShownumpad(true) }}
        className={isBlockEmpty() ? styles.empty_block : styles.container}>

        <div className={styles.block}>
          {props.value !== 0 ? props.value : ""}
        </div>

      </div >
      {shownumpad && <Numpad cancel={() => setShownumpad(false)} onClick={(numpadClicked)} />}

    </div>
  )
}


export default Block