import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import { useState, useContext } from 'react';
import { UserContext } from './_app';
import { FaAngleDown } from 'react-icons/fa'

export default function Home() {
  const { authService } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <Navbar isLoggedIn={authService.isLoggedIn} rokens={authService.rokens} userName={authService.userName}/>
      <Header />
      <div className={styles.headerEnd}>
        <a href='#next'><FaAngleDown/></a>
      </div>
      <div className={styles.next} id='next'></div>
    </div>
  )
}
