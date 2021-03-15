import React from 'react'
import Question from '../../Question'
import './About.css'

function About() {
  return (
    <section className="about" id="about">
        <div className="text-block">
          <h2>About us</h2>
          <p>The occupational traffic permit is one of the most important things in the company when carrying out freight
            transport. In fact, it is a prerequisite for doing business traffic at all. </p>
          <Question/>
        </div>
        <img src=" images/pic1.svg" alt="" />
      </section>
  )
}

export default About
