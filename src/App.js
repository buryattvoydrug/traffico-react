import React from 'react'

import './App.css';

import Navbar from './components/Navbar.js';
import About from './components/pages/About/About';
import Bottom from './components/pages/Bottom/Bottom';
import FAQ from './components/pages/FAQ/FAQ';
import Footer from './components/pages/Footer/Footer';
import Head from './components/pages/Head/Head';
import How from './components/pages/How/How';
import Us from './components/pages/Us/Us';


function App() {


  return (
    <div className="wrapper">
    <div className="container">
      <header>
        <Navbar />
      </header>
    <Head />
    <About />  
      <How />
      <FAQ />
      <Us />
      <Bottom/>
      <Footer/>
    </div>
  </div>
  );
}

export default App;
