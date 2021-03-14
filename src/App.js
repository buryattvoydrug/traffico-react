import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js';
import About from './components/pages/About/About';
import Bottom from './components/pages/Bottom/Bottom';
import FAQ from './components/pages/FAQ/FAQ';
import Head from './components/pages/Head/Head';
import How from './components/pages/How/How';
import Us from './components/pages/Us/Us';

function App() {
  return (
    <div className="wrapper">
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/'/>
        </Switch>
      </Router>
      <Head />
      <About/>
      <How/>
      <FAQ/>
      <Us/>
      <Bottom/>
      <footer>
        <copyright>buryattvoydrug @ 2021</copyright>
        <ul classNameName="social">
          <li><a><img src=" images/facebook.png" alt="" /></a></li>
          <li><a><img src=" images/twitter.png" alt="" /></a></li>
          <li><a><img src=" images/insta.png" alt="" /></a></li>
        </ul>
      </footer>
    </div>
  </div>
  );
}

export default App;
