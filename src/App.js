import React from 'react';

import Jumbotron from './components/jumbotron';
import Nav from './components/nav';
import Welcome from './components/welcome';

import './css/frontcss.css';

function App() {
  return (
    <>
      <Jumbotron />
      <Nav />
      <div className="container">
        <Content />
      </div>
    </>
  );

  function Content()
  {
    return <Welcome />
  }
}

export default App;
