import styles from './Button.module.scss'

interface Props {
  type?: string
  text: string
  onClick: () => any
}
export default function Button(props: Props) {
  const getClassName = () => {
    switch (props.type) {
      case "primary": return styles.button
      case "secondary": return styles.button_secondary
      default: return styles.button
    }
  }
  return (
    <button className={getClassName()} onClick={props.onClick}>{props.text}</button>
  )
}
