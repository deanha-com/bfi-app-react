import './App.css';
// import Filter from './Filter';
// import Nav from './Nav';
import GetArticles from './GetArticles';
import Hero from './Hero'
// import Header from './Header'
import Footer from './Footer'
import Filter from './Filter'
import React, { useState } from 'react'


function App() {

  const [currPage, setCurrPage] = useState('Home');

  console.log('CURENT PATH ', window.location.pathname)

  // Custom routing
  return (
    <div className="App">
      {/* <Header setCurrPage={setCurrPage} /> */}
      {/* <Nav /> */}

      <header>
        <div id="logo"><a href="/">BFI.</a></div>
        <div id="menu">
          <nav>
            <Filter currPage={currPage} setCurrPage={setCurrPage} />
          </nav>
        </div>
      </header>

      {window.location.pathname === '/' ? <Hero /> : null}

      <main id="content">
        <GetArticles currPage={currPage} setCurrPage={setCurrPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
