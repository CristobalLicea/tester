import React, { useState } from "react";
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = ({isLoggedIn, userName, rokens}) => {
  const [toggle, setToggle] = useState(false);

  return(
    <div className={styles.container}>
      <div className={styles.navleft}>
        <div className={styles.navlink}><Link href="https://charming-conkies-134cee.netlify.app/">Home</Link><div className={styles.navdot}/></div>
        <div className={styles.navlink}>Shop<div className={styles.navdot}/></div>
        <div className={styles.navlink}>Matches<div className={styles.navdot}/></div>
        <div className={styles.navlink}>More<div className={styles.navdot}/><div className={styles.navdrop}></div><div className={styles.navspace}></div></div>
      </div>

      <div className={styles.logo}>
        <img src="bearclawlogo.webp"/>
      </div>

      <div className={styles.navright}>
        <div className={styles.navlink}>Timeline<div className={styles.navdot}/></div>
        <div className={styles.navlink}>Players<div className={styles.navdot}/></div>
        <div className={styles.navlink}>
          {isLoggedIn ? (<div>{rokens} Rokens</div>):null}<div className={styles.navdot}/></div>
        <div className={styles.navlink}>
          {isLoggedIn ? 
          <>
            <div className={styles.navusericon}  onClick={() => setToggle(true)}><FaUser/></div>
            <div onClick={() => setToggle(true)}>{userName}</div>

            {toggle && (
              <motion.div 
                className={styles.userMenu}
                whileInView={{ opacity: [0,1] }}
                transition={{ duration: 0.85, ease: 'easeInOut'}}
              >
                <HiX onClick={() => setToggle(false)}/>
              </motion.div>
            )}
          </>:<>
            <div className={styles.login}>
              <Link href="https://charming-conkies-134cee.netlify.app/register">Login / Register</Link>
              </div>
          </>}
          
        </div>
      </div>
    </div>
  )
}

export default Navbar;