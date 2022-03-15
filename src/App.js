import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <HomePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
