import React from "react";
import styles from '../styles/Match.module.css';

const Match = () => {
  return(
    <div className={styles.container}>
      <div className={styles.contentLeft}>
        <div className={styles.playerLeft}></div>
        <div className={styles.stats}></div>
      </div>
      <div className={styles.contentRight}>
        <div className={styles.playerRight}></div>
      </div>
    </div>
  )
}

export default Match