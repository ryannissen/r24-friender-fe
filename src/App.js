import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';
import RoutesComp from './RoutesComp';
import FrienderApi from './api';
import UserContext from './userContext';

/**
 * App component
 * 
 * props: none
 * 
 * // TODO: Ideally, we can trim down our currentUser state
 * state:
 *  - currentUser: user object
 *  { username, 
 *    firstname, 
 *    lastname,
 *    email, 
 *    location, 
 *    hobbies, 
 *    interests,
 *    friendradius,
 *    password,
 *    image_url
 * }
 * 
 * App -> {NavBar, Routes}
 */
function App() {

  const [currentUser, setCurrentUser] = useState(null);

  // Sets current user state from local storage
  useEffect(function fetchUserOnFirstLoad() {
    console.log("WHATS IN LOCAL STORAGE", localStorage.getItem("user"))
    if (localStorage.getItem("user")) {
      setCurrentUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  // Makes API call to signup new user
  async function signupUser(user) {
    const newUser = await FrienderApi.signupUser(user);
    localStorage.setItem("user", JSON.stringify(newUser));
    setCurrentUser(newUser);
  }

  // Makes API call to login a user
  async function loginUser(user) {
    const loggedInUser = await FrienderApi.loginUser(user);
    console.log("LOGGED IN", loggedInUser);
    localStorage.setItem("user", JSON.stringify(loggedInUser));
    setCurrentUser(loggedInUser);
  }

  // Makes API call to update user with new user info
  async function updateUser(user) {
    const profileUser = await FrienderApi.updateUser(user);
    console.log("Updating user profile", profileUser);
    localStorage.setItem("user", JSON.stringify(profileUser));
    setCurrentUser(profileUser);
  }

  // Logs out user by removing them from local storage and setting state back to null
  function logoutUser() {
    localStorage.removeItem("user");
    setCurrentUser(null);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser }}>
          <NavBar handleLogout={logoutUser} />
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
