import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Client from './Client'
import { USObject1, USObject2, USObject3 } from './pages/Us/Data'
import './CarouselBox.css'
function CarouselBox() {
  return (
    <Carousel>
      <Carousel.Item>
          <div className="client__item client__item_first">
            <h3>Out Awesome Clients</h3>
          </div>
      </Carousel.Item>
      <Carousel.Item>
        <Client {...USObject1}/>
      </Carousel.Item>
      <Carousel.Item>
        <Client {...USObject2}/>
      </Carousel.Item>
      <Carousel.Item>
        <Client {...USObject3}/>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselBox
