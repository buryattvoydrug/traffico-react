import React from 'react'
import Button from '../../Button'
import Question from '../../Question'
import './Bottom.css'

function Bottom() {
  return (
    <section className="bottom">
        <img src=" images/auto2.svg" alt="" className="bottom__auto" />
        <img src=" images/vector.svg" alt="" className="mask" />
        <div className="bottom-block">
          <Question/>
          <div className="login">
            <label for="name">Name</label>
            <input id="name" type="text" placeholder="Your name" />
            <label for="mail">Email address</label>
            <input id="mail" type="text" placeholder="Your email address" />
            <Button/>
          </div>
        </div>
        <div className="bottom-nav">
          <div className="logo">
            <img src=" images/logogray.png" alt="" />
            <span>Traffico.</span>
          </div>
          <nav>
            <ul className="nav">
              <li className="nav__item"><a>About</a></li>
              <li className="nav__item"><a>How to</a></li>
              <li className="nav__item"><a>FAQS</a></li>
            </ul>
          </nav>
        </div>
      </section>
  )
}

export default Bottom
