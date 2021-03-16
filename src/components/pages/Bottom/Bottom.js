import React,{Component} from 'react'
import { isMobile } from 'react-device-detect'
import { animateScroll as scroll } from 'react-scroll'

import Form from '../../Form'
import Navbar from '../../Navbar'
import Question from '../../Question'
import './Bottom.css'

export default class Bottom extends Component {


 
  render() {
    return (
      <section className="bottom">
        <img src=" images/auto2.svg" alt="" className="bottom__auto" />
        <img src=" images/vector.svg" alt="" className="mask" />
        <div className="bottom-block">
          <Question/>
          <Form/>
        </div>
          {isMobile ? 
            <>
            <div className="navbar">
                    <div className="logo">
                      <img src="images/logo.png" alt="" />
                      <span>Traffico.</span>
                    </div>
                    <a onClick={() => scroll.scrollToTop()}>
              <img src=" images/totop.png" className="totop__img"/>
            </a>
            </div>
            
            
            </>
          :
          <Navbar/>
          }
          
      </section>
    )
  }
}