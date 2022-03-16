import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';
import RoutesComp from './RoutesComp';
import FrienderApi from './api';
import UserContext from './userContext';

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(function fetchUserOnFirstLoad() {
    console.log("WHATS IN LOCAL STORAGE", localStorage.getItem("user"))
    if(localStorage.getItem("user")){
      setCurrentUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  async function signupUser(user) {
    const newUser = await FrienderApi.signupUser(user);
    localStorage.setItem("user", JSON.stringify(newUser));
    setCurrentUser(newUser);
  }

  async function loginUser(user) {
    const loggedInUser = await FrienderApi.loginUser(user);
    console.log("LOGGED IN", loggedInUser);
    localStorage.setItem("user", JSON.stringify(loggedInUser));
    setCurrentUser(loggedInUser);
  }

  async function updateUser(user) {
    const profileUser = await FrienderApi.updateUser(user);
    console.log("Updating user profile", profileUser);
    localStorage.setItem("user", JSON.stringify(profileUser));
    setCurrentUser(profileUser);
  }

  function logoutUser() {
    localStorage.removeItem("user");
    setCurrentUser(null);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser }}>
          <NavBar handleLogout={logoutUser}/>
          <RoutesComp 
            handleSignup={signupUser} 
            handleLogin={loginUser}
            handleUpdate={updateUser} />
        </UserContext.Provider>
      </BrowserRouter>
    </div >
  );
}

export default App;
