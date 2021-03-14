import React from 'react'
import './Tab.css'

function Tab({
  tabTitle,tabText
}) {
  return (
    <div className="tab">
      <div className="tab-title">
        <span>{tabTitle}</span>
        <span className="plus"></span>
      </div>
      <div className="tab-text">{tabText}</div>
    </div>
  )
}

export default Tab
