import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
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

function App() {
  return (
    <Router>
      <Canvas />
      <AboutMe />
    </Router>
  );
}

export default App;
