import styles from '../styles/playground.module.css';
import questionLogo from '../assets/questionLogo.png'
import valueLogo from '../assets/valueLogo.png';
import refresh from '../assets/refresh.jpeg';
import Editor from '@monaco-editor/react';

export default function Playground()
{
  return (
    <div className={styles.playGround}>
      <div className={styles.questionArea}>
        <div className={styles.sideBar}>
          <img src = {questionLogo} alt = "ques-logo" className={styles.logo}/>
          <img src = {valueLogo} alt = "submitValue-logo" className={styles.logo}/>
        </div>
        <div className={styles.question}>
          <p className={styles.q}>QUESTION</p>
          <p className={styles.qName}>QUESTION NAME</p>
          <div className={styles.levelDiv}>
          <button className={styles.levelBtn}>Level of ques</button>
          <p style={{"color": "grey","marginLeft" : "15px", "marginRight" : "15px"}}>&#x2022;</p>
          <p className={styles.points}>10 / 10</p>
          </div>
        </div>
      </div>
      <div className={styles.solutionArea}>
        <div className={styles.monacoEditor}>
            <div className={styles.solutionAreaPart1}>
              <select name="language-selection" id="langSelection" className={styles.langSelect}>
                <option value="python">Python</option>
                <option value="c++">C++</option>
              </select>
              <img src = {refresh} alt = "reset code" className={styles.refreshBtn}/>
            </div>
            <div className={styles.solutionAreaPart2}>
              <Editor height = "60vh" width = "100%" defaultLanguage = "python" theme = "vs-dark"/>
            </div>
        </div>
        <div className={styles.resultArea}>
          <div className={styles.resultHeadings}>
            <p className={styles.closeBtn}>&#x2304;</p>
            <p className={styles.jn}>INPUT</p>
            <p className={styles.jn}>|</p>
            <p className={styles.jn}>OUTPUT</p>
            <p className={styles.jn}>|</p>
            <p className={styles.jn}>ERROR</p>
            <p className={styles.jn}>|</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}