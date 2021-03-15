import React from 'react'
import CarouselBox from '../../CarouselBox'
import './Us.css'

function Us() {
  return (
    <section className="us" id="us">
        <h2>About us</h2>
        <div className="arrows">
          <button className="arrow__button prev"><img src=" images/redarrow.png" alt="" /></button>
          <button className="arrow__button next"><img src=" images/redarrow.png" alt="" /></button>
        </div>
        <div className="clients-block">
            
            <CarouselBox/>
          
        </div>
      </section>
  )
}

export default Us
