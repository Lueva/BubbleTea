import React from 'react'
import Bubble from './Bubble'
import Cup from './Cup'
import Tea from './Tea'

const BubbleTea = ({ colors, title, size, rotation, animation, font, waves }) => {
  const bubbleTeaStyle = {
    transform: 'scale(' + size/100 + ')'
  }
  const fontStyle = {
    'fontFamily': font + ', cursive',
    'height': '46px'
  }

  return (
    <div className="bubble-tea">
      <div style={bubbleTeaStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="280" viewBox="-10 -35 153.2 225">
          <g id="bubbletea">
              <Tea color={colors.tea} waves={waves}></Tea>
              <Cup color={colors.cup} animation={animation}></Cup>
              <Bubble color={colors.bubble} rotation={rotation}></Bubble>
          </g>
        </svg>
      </div>
      <h1 style={fontStyle}> {title} </h1>
    </div>
  )}

export default BubbleTea