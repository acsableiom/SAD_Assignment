import './App.css';
import React from 'react';
import Home from './pages/Home'
import Navbar from './Navbar'
import Course from './pages/Course';
import Module from './pages/Module'
import Session from './pages/Session';


function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/Course":
      Component = Course
      break
    case "/Module":
      Component = Module
      break
    case "/Session":
      Component = Session
      break
    default :
    break
  }


  return (
    <div className="App">
      <Navbar />
      <Component />
    </div>
  );
}

export default App;
