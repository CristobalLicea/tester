import axios from 'axios';
import Cookies from 'js-cookie';
//import io from 'socket.io-client';
const headers = { 'Content-Type': 'application/json' };

class User {
  constructor() {
    this.id = '';
    this.userName = '';
    this.email = '';
    this.photo = '';
    this.rokens = 0;
    this.clearance = '';
    this.isLoggedIn = false;
  }

  setUserEmail(email) { this.email = email; }

  setIsLoggedIn(loggedIn) { this.isLoggedIn = loggedIn }

  setUserData(userData) {
    const {
      _id, userName, email, userImage, rokens, clearance
    } = userData;
    this.id = _id;
    this.userName = userName;
    this.email = email;
    this.photo = userImage;
    this.rokens = rokens;
    this.clearance = clearance
  } 
}

export class AuthService extends User {
  constructor() {
    super();
    this.authToken = '';
    this.bearerHeader = {};
  }

  logoutUser() {
    this.id = '';
    this.userName = '';
    this.email = '';
    this.photo = '';
    this.rokens = 0;
    this.isLoggedIn = false;
    this.authToken = '';
    this.bearerHeader = {};
  }

  setAuthToken(token) { this.authToken = token }
  setBearerHeader(token) {
    this.bearerHeader = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }
  getBearerHeader = () => this.bearerHeader;

  async registerUser(email, password, userName) {
    const body = { "email": email, "password": password, "userName": userName}
    try {
      await axios.post('https://tester-6jxz.vercel.app/api/user/register', body);
      
    } catch (error) {
      throw error
    }
  }

  async logInUser(email, password) {
    const body = { "email": email, "password": password }
    try {
      const res =  await axios.post('https://tester-6jxz.vercel.app/api/user/login', body, { headers });
      Cookies.set("userToken", res.data.token)
      this.setAuthToken(res.data.token);
      this.setBearerHeader(res.data.token);
      this.setIsLoggedIn(true);
      const id = res.data.success._id
      await this.getUser(id);
    } catch (error) {
      console.log(error);
      throw error;    
    }
  }

  async getUser(id) {
    const headers = this.getBearerHeader();
    const body = { "_id": id }
    try {
      const res = await axios.post('https://tester-6jxz.vercel.app/api/user/loggedin', body);
      console.log(res)
      this.setUserData(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  async updateUser(id, body) {
    const headers = this.getBearerHeader();
    try {
      const res = await axios.put(`https://wage-rat-server.herokuapp.com/api/v1/auth/${id}`, body, { headers })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
}
