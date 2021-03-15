import React, { useState } from 'react'
import Tab from '../../Tab'
import './FAQ.css'
import {FAQObject1,FAQObject2,FAQObject3,FAQObject4,FAQObject5,FAQObject6,FAQObject7,FAQObject8,FAQObject9,FAQObject10} from './Data'

function FAQ() {
  const [isActive,setActive]= useState(false)
  const toggleClass = () => setActive(!isActive)
  return (
    <section className="faq" id="faq">
        <h2>FAQ</h2>
        <h3>Questions and Answers on Professional Traffic Permits:</h3>
        <img src=" images/pic3.svg" alt="" className="faq__img" />
        <div className="tabs-section">
          <div className="tabs-block">
            <Tab {...FAQObject1}/>
            <Tab {...FAQObject2}/>
            <Tab {...FAQObject3}/>
            <Tab {...FAQObject4}/>
            <Tab {...FAQObject5}/>
          </div>
          <div className="tabs-block">
            <Tab {...FAQObject6}/>
            <Tab {...FAQObject7}/>
            {isActive ? 
              <>
            <Tab {...FAQObject8}/>
            <Tab {...FAQObject9}/>
            <Tab {...FAQObject10}/>
              </>
            :
            <div onClick={toggleClass} className="tab">
              <div className="tab-title more">
                <span>LOAD MORE</span>
                <span className="plus"></span>
              </div>
            </div>}
          </div>
        </div>
      </section>
  )
}

export default FAQ
