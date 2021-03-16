import React from 'react'
import {Link} from 'react-scroll';
import Button from '../../Button'
import './Head.css'

function Head() {
  return (
    <section className="head">
        <h1>Your awesome traffic permit consultant.</h1>
        <Link to="us"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}><Button/></Link>
        <img src=" images/people.svg" alt="" className="people" />
        <img src=" images/auto.svg" alt="" className="auto" />
      </section>
  )
}

export default Head
