import React from "react";
import styles from '../styles/Header.module.css';
import Match from "./Match";

const Header = () => {
  return(
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentleft}>
          <div className={styles.contentHeader}>
            News
          </div>
          <div className={styles.contentBody}></div>
        </div>

        <div className={styles.contentcenter}>
          <div className={styles.contentHeader}>
            Current Games
          </div>
          <div className={styles.contentBody}>
            <Match />
          </div>
        </div>

        <div className={styles.contentright}>
          <div className={styles.contentHeader}>
            Latest Wins
          </div>
          <div className={styles.contentBody}></div>
        </div>
      </div>
    </div>
  )
}

export default Header;