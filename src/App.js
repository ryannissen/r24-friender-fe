import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';
import HomePage from './HomePage';
import RoutesComp from './RoutesComp';
import FrienderApi from './api';
import UserContext from './userContext';

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  async function signupUser(user) {
    console.log('user in signUp user in App comp', user);
    const newUser = await FrienderApi.signupUser(user);
    console.log('success, newUser: ', newUser);
    setCurrentUser(newUser);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser }}>
          <NavBar />
          <RoutesComp handleSignup={signupUser} />
        </UserContext.Provider>
      </BrowserRouter>
    </div >
  );
}

export default App;
