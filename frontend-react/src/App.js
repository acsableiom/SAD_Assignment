import './App.css';
import React from 'react';
import Home from './pages/Home';
import Navbar from './Navbar';
import Course from './pages/Course';
import Module from './pages/Module';
import Session from './pages/Session';
import Courses from './pages/Courses';
import Soft_Eng_3 from './pages/Sad_3';
import Comp_Sci_1 from './pages/Comp_Sci_1';
import SEModules from './pages/SEModules';
import CEModules from './pages/CEModules';


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
    case "/Courses":
      Component = Courses
      break
    case "/Sad_3":
      Component = Soft_Eng_3
      break
    case "/Comp_Sci_1":
      Component = Comp_Sci_1
      break
    case "/SEModules":
      Component = SEModules
      break
    case "/CEModules":
      Component = CEModules
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
