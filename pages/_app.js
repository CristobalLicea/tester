import '../styles/globals.css';
import { createContext, useState, useContext, useEffect } from 'react';
import { AuthService } from '../utils/services';

const authService = new AuthService();

export const UserContext = createContext();

const AuthProvider = ({ children }) => {
  const context = {
    authService
  }

  const [authContext] = useState(context);
  return (
    <UserContext.Provider value={authContext}>
      { children }
    </UserContext.Provider>
  );
}

function MyApp({ Component, pageProps }) {
  return <AuthProvider><Component {...pageProps} /></AuthProvider>
}

export default MyApp
