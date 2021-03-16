import React, {useState} from 'react'
import {Link} from 'react-scroll';

import './Navbar.css'

function Navbar() {

  const [isActive,setActive]= useState(false)
  const toggleClass = () => {
    setActive(!isActive);
    if (document.body.style.overflowY !== "hidden") {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  };

  const closeMenu = () => {
    setActive(false);
    document.body.style.overflowY = "scroll";
  }
  return (
    <div className="navbar">
      <Link to="/"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500} onClick={closeMenu} className="logo">
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
            <li className="nav__item"><Link onClick={closeMenu} to="about"
                                                                spy={true}
                                                                smooth={true}
                                                                offset={-70}
                                                                duration= {500}
             >About</Link></li>
            <li className="nav__item"><Link onClick={closeMenu} to="how"
                                                                spy={true}
                                                                smooth={true}
                                                                offset={-70}
                                                                duration= {500}
             >How to</Link></li>
            <li className="nav__item"><Link onClick={closeMenu} to="faq"
                                                                spy={true}
                                                                smooth={true}
                                                                offset={0}
                                                                duration= {500}
             >FAQS</Link></li>
            <li className="nav__item"><Link onClick={closeMenu} to="us"
                                                                spy={true}
                                                                smooth={true}
                                                                offset={-70}
                                                                duration= {500}
             >Contact us</Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
