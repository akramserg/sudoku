import styles from './Header.module.scss'

interface Props {
  title: string
}
const Header = (props: Props) => {
  return (
    <div className={styles.container}>
      <h1>{props.title}</h1>
    </div>
  )
}
export default Header