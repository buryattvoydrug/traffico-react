import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  const [isActive,setActive]= useState(false)
  const toggleClass = () => setActive(!isActive)
  return (
    <header>
      <Link to="/" className="logo">
          <img src="images/logo.png" alt="" />
          <span>Traffico.</span>
        </Link>
        <div onClick={toggleClass} className={!isActive ? 'nav-button':'nav-button nav-button_active'}>
          <span className="nav__button"></span>
          <span className="nav__button"></span>
          <span className="nav__button"></span>
        </div>
        <nav className={!isActive ? '':'nav_active'}>
          <ul className='nav'>
            <li className="nav__item"><Link to="/about">About</Link></li>
            <li className="nav__item"><Link to="/how">How to</Link></li>
            <li className="nav__item"><Link to="/faq">FAQS</Link></li>
            <li className="nav__item"><Link to="/us">Contact us</Link></li>
          </ul>
        </nav>
    </header>
  )
}

export default Navbar
