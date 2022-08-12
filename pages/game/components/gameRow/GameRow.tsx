import styles from './GameRow.module.scss'
import Block from '../block/Block'

interface Props {
  rowValues: number[]
  rowi: number
}
const GameRow = (props: Props) => {
  //EACH ROW HAS 9 BLOCKS
  //LOOP THROUGH THEM AND RENDER BLOCKS

  return (
    <div role="gamerow" className={styles.gameRow_container}>
      {props.rowValues?.map((value, columnIndex) =>
        <Block value={value} coli={columnIndex} rowi={props.rowi} key={columnIndex} />
      )}
    </div>
  )
}

export default GameRow