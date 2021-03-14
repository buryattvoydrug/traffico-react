import React from 'react'
import Client from '../../Client'
import { USObject1, USObject2, USObject3 } from './Data'
import './Us.css'

function Us() {
  return (
    <section className="us">
        <h2>About us</h2>
        <div className="arrows">
          <button className="arrow__button prev"><img src=" images/redarrow.png" alt="" /></button>
          <button className="arrow__button next"><img src=" images/redarrow.png" alt="" /></button>
        </div>
          <div className="client__item">
            <h3>Out Awesome Clients</h3>
          </div>
          <Client {...USObject1}/>
          <Client {...USObject2}/>
          <Client {...USObject3}/>
        <div className="clients-block">
          <div className="client__item">
            <h3>Out Awesome Clients</h3>
          </div>
          <Client {...USObject1}/>
          <Client {...USObject2}/>
          <Client {...USObject3}/>
        </div>
      </section>
  )
}

export default Us
