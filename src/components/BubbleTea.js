import React from 'react'
import Bubble from './Bubble'
import Cup from './Cup'
import Tea from './Tea'

import './BubbleTea.css'

const BubbleTea = ({ colors, title, size, rotation }) => {
  const bubbleTeaStyle = {
    transform: 'scale(' + size/100 + ')'
  }
  return (
    <div className="bubble-tea">
      <div style={bubbleTeaStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="280" viewBox="0 -35 153.2 225">
          <g id="bubbletea">
              <Tea color={colors.tea}></Tea>
              <Cup color={colors.cup}></Cup>
              <Bubble color={colors.bubble} rotation={rotation}></Bubble>
          </g>
        </svg>
      </div>
      <h1 className="bubble-tea-title"> {title} </h1>
    </div>
  )}

export default BubbleTea