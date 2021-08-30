import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import RecentWork from './components/RecentWork';
import Navbar from './components/Navbar'
import ContactMe from './components/ContactMe'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'react-bootstrap'

import Canvas from './components/Background'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Canvas />
      <Navbar />
      <Intro />
      <AboutMe />
      <Skills />
      <RecentWork />
      <ContactMe />
    </Router>
  );
}

export default App;
