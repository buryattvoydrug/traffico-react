import React from 'react'
import Form from '../../Form'
import Navbar from '../../Navbar'
import Question from '../../Question'
import './Bottom.css'

function Bottom() {
  return (
    <section className="bottom">
        <img src=" images/auto2.svg" alt="" className="bottom__auto" />
        <img src=" images/vector.svg" alt="" className="mask" />
        <div className="bottom-block">
          <Question/>
          <Form/>
        </div>
          <Navbar/>
      </section>
  )
}

export default Bottom
