import React, { Component } from 'react'
import {
  isMobile
} from "react-device-detect";
import Slider from 'infinite-react-carousel';
import Client from './Client'
import { USObject1, USObject2, USObject3 } from './pages/Us/Data'
import './CarouselBox.css'

export default class CarouselBox extends Component {
  render() {
    const settings =  {
      accessibility: false,
      autoplay: true,
      centerMode: false,
      centerPadding: 0,
      initialSlide: 0,
      overScan: 1,
      shift: 20,
      slidesToShow: 3
    };
    const settingsMobile =  {
      accessibility: false,
      autoplay: true,
      arrows: false,
      centerMode: false,
      centerPadding: 0,
      initialSlide: 0,
      overScan: 1,
      shift: 20,
      slidesToShow: 1
    };
    return (
      <>
        {isMobile ?
          <>
          <div className="client__item client__item_first">
              <h3>Out Awesome Clients</h3>
            </div>
          <Slider {...settingsMobile}>
            
            <Client {...USObject1}/>
            <Client {...USObject2}/>
            <Client {...USObject3}/>
            <Client {...USObject1}/>
            <Client {...USObject2}/>
            <Client {...USObject3}/>
          </Slider>
          </> :
          <Slider {...settings}>
              <div className="client__item client__item_first">
                <h3>Out Awesome Clients</h3>
              </div>
              <Client {...USObject1}/>
              <Client {...USObject2}/>
              <Client {...USObject3}/>
              <Client {...USObject1}/>
              <Client {...USObject2}/>
              <Client {...USObject3}/>
          </Slider>
        }
      </>

      
    )
  }
}
