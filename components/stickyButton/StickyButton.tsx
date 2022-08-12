import styles from './StickyButton.module.scss'

interface Props {
  onClick: () => void
  symbol: string
  type?: string

}
const StickyButton = (props: Props) => {

  return (
    <div className={styles.sticky_button_wrapper}>
      <div role="stickybutton" className={props.type === "secondary" ? styles.sticky_button_secondary : styles.sticky_button} onClick={props.onClick}>{props.symbol}</div>
    </div>)
}

export default StickyButton 