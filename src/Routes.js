import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Home.js';
import Curriculum from './Curriculum';
import Mentors from './Mentors';
import Join from './Join';
import Contact from './Contact';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path={"/"} component={() => <Home />} />
        <Route exact path={"/curriculum"} component={() => <Curriculum />} />
        <Route exact path={"/mentors"} component={() => <Mentors />} />
        <Route exact path={"/join"} component={() => <Join />} />
        <Route exact path={"/contact"} component={() => <Contact />} />
      </div>
    </Router>
  )
}

export default Routes;
