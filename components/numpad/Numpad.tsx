import StickyButton from '../stickyButton/StickyButton'
import styles from './Numpad.module.scss'

interface Props {
  onClick: (num: number) => void
  cancel: () => void
}
const Numpad = (props: Props) => {

  const NumpadBlock = ({ n, t }: { n: number, t?: string }) => {
    return <div onClick={() => props.onClick(n)} className={styles.numpad_block}>{t ? t : n}</div>
  }
  return (
    <div className={styles.container}>
      <div className={styles.numbpad_container}>
        <h2>Choose a value</h2>


        <div className={styles.numpad_row}>
          <NumpadBlock n={1} />
          <NumpadBlock n={2} />
          <NumpadBlock n={3} />
        </div>

        <div className={styles.numpad_row}>
          <NumpadBlock n={4} />
          <NumpadBlock n={5} />
          <NumpadBlock n={6} />
        </div>

        <div className={styles.numpad_row}>
          <NumpadBlock n={7} />
          <NumpadBlock n={8} />
          <NumpadBlock n={9} />
        </div>

        <div className={styles.numpad_row}>
          <NumpadBlock n={0} t={"empty"} />
        </div>
      </div>
      <StickyButton onClick={props.cancel} symbol={'X'} />

    </div>
  )
}


export default Numpad