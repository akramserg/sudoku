
import GameBoard from './components/gameBoard/GameBoard'
import Header from '../../components/header/Header'
import SubHeader from '../../components/subHeader/SubHeader'
import styles from './Game.module.scss'

const Home = () => {

  return (
    <div className={styles.container}>
      <Header title="Sudoku Solver" />
      <SubHeader />
      <GameBoard />
    </div>
  )
}
export default Home