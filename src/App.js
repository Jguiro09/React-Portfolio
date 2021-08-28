import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import RecentWork from './components/RecentWork';
import Navbar from './components/Navbar'

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
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/AboutMe" component={AboutMe} />
        <Route exact path="/Skills" component={Skills} />
        <Route exact path="/RecentWork" component={RecentWork} />
        <Route exact path="/test" component={Navbar} />
      </Switch>
    </Router>
  );
}

export default App;
