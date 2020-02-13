import React, {useState} from 'react';

import Jumbotron from './components/jumbotron';
import Nav from './components/nav';
import Welcome from './components/welcome';
import Services from './components/services';
import WhyTherapy from './components/whyTherapy.jsx';

function App() {

  const [page, setPage] = useState("home");

  return (
    <>
      <Jumbotron />
      <Nav pageHandler={changePage} />
      <div className="container">
        <Content />
      </div>
    </>
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
