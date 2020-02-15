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

  const [page, setPage] = useState("home");

  return (
    <Router>
      <Jumbotron />
      <Nav pageHandler={changePage} />
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

  function Content()
  {
    switch (page)
    {
      case "home":
        return <Welcome />
      
      case "services":
        return <Services />
      
      case "why":
        return <WhyTherapy />

      default:
        return <Welcome />
    }
  }

  function changePage(newPage)
  {
    setPage(newPage);
  }

}

export default App;
