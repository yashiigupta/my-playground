import Coin from '../assets/xp-coin.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/navbar.module.css';

export default function NavBar()
{
  return (
    <div className={styles.navbar}>
      <div className={styles.part1}>
        <FontAwesomeIcon icon = {faArrowLeft} className={styles.backArrow}/>
        <p className={styles.questionName}>Back &nbsp; | &nbsp; Question Name</p>
      </div>
      <div className={styles.part2}>
        <button className={styles.pointsBtn}>Total Points <img src = {Coin} alt = "xp coin" className={styles.coinImage}/> Number</button>
          <button className={styles.runBtn}>&#9658; Run</button>
          <button className={styles.submitBtn}>Submit</button>
      </div>
    </div>
  )
}