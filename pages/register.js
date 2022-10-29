import styles from '../styles/Register.module.css'
import Navbar from "../components/Navbar";
import { useState, useContext } from 'react';
import { UserContext } from './_app';

export default function Register () {
  const { authService } = useContext(UserContext);
  const INIT_STATE = {
    userName: '',
    email: '',
    password: ''
  };
  const [userInfo, setUserInfo] = useState(INIT_STATE);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onChange = ({ target: { name, value }}) => {
    setUserInfo({ ...userInfo, [name]:value })
  }

  const { userName, email, password } = userInfo;

  const createUser = (e) => {
    e.preventDefault();

    const { email, password, userName } = userInfo
    if (!!userName && !!email && !!password) {
      setIsLoading(true)
      authService.registerUser(email.toLowerCase(), password, userName).then(() => {
        authService.logInUser(email.toLowerCase(), password).then(() => {
            setUserInfo(INIT_STATE); 
        }).catch((error) => {
          console.error('logging in user', error);
          setError(true); 
        })
      }).catch((error) => {
        console.error('registering user', error);
        setError(true);
      })
      setIsLoading(false);
    }
  }

  return(
    <div className={styles.container}>
      <Navbar isLoggedIn={authService.isLoggedIn} rokens={authService.rokens} userName={authService.userName}/>
        <div className={styles.register}>
          <form onSubmit={createUser} className={styles.form}>
            Register
            <input onChange={onChange} type="text" name="userName" value={userName} autoComplete="off" placeholder="Username"/>
            <input onChange={onChange} type="e-mail" name="email" value={email} autoComplete="off" placeholder="E-Mail"/>
            <input onChange={onChange} type="password" name="password" value={password} autoComplete="off" placeholder="Password"/>
            <input type="Submit" className={!!email && !!password && !!userName ? "createBtn" : "createBtnOff"} value="Create Account"/>
          </form>
        </div>
        <div className={styles.login}>
          <div className={styles.form}></div>
        </div>
    </div>


  )
}