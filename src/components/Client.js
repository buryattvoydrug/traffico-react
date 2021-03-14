import React from 'react'
import './Client.css'

function Client({
  clientText,clientName,clientImage
}) {
  return (
          <div className="client__item">
            <p>{clientText}</p>
            <div className="person">
              <img src={clientImage} alt="" />
              <span>{clientName}</span>
            </div>
          </div>
  )
}

export default Client
