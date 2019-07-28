import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Home.js';
import Curriculum from './Curriculum';
import Mentors from './Mentors';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path={"/"} component={() => <Home />} />
        <Route exact path={"/curriculum"} component={() => <Curriculum />} />
        <Route exact path={"/mentors"} component={() => <Mentors />} />
      </div>
    </Router>
  )
}

export default Routes;
