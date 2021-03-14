import React from 'react'
import Button from '../../Button'
import './Head.css'

function Head() {
  return (
    <section className="head">
        <h1>Your awesome traffic permit consultant.</h1>
        <Button/>
        <img src=" images/people.svg" alt="" className="people" />
        <img src=" images/auto.svg" alt="" className="auto" />
      </section>
  )
}

export default Head
