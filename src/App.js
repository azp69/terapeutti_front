import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Jumbotron from './components/jumbotron';
import Nav from './components/nav';
import Welcome from './components/welcome';
import Services from './components/services';
import WhyTherapy from './components/whyTherapy.jsx';

function App() {

  return (
    <Router>
      <Jumbotron />
      <Nav />
      <div className="container">
        <Switch>
          <Route path="/palvelut">
            <Services />
          </Route>

          <Route path="/miksi">
            <WhyTherapy />
          </Route>

          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
        
      </div>
      <div className="mb-5">

      </div>
    </Router>
  );

}

export default App;
