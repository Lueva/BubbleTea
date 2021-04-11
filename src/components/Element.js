import Bubble from './Bubble'
import Tea from './Tea'
import Cup from './Cup'
import ReactTooltip from 'react-tooltip';

import './Element.css'

const Element = ({onChangeBubblePosition, onActivateAnimation, onActivateTeaWave, rotation, animation, waves}) => {
    const tooltipAnimationOption= !animation ? "Active" : "Désactive"
    const tooltipWaveOption = !waves ? "Active" : "Désactive"
    return (
    <div className="element">
        <ReactTooltip id="tooltipTeaWave" effect="solid" place="bottom" >
            {tooltipWaveOption} l'animation du Thé.
        </ReactTooltip>
        <div className="item" data-tip data-for="tooltipTeaWave" onClick={() => {onActivateTeaWave()}}>
            <svg className="bubble-element" xmlns="http://www.w3.org/2000/svg" width="100" viewBox="0 0 133.2 188.9">
                <g id="bubbletea">
                    <Tea color="#BABBC6"></Tea>
                </g>
            </svg>
        </div>
        <ReactTooltip id="tooltipAnimation" effect="solid" place="bottom" >
            {tooltipAnimationOption} l'animation du BubbleTea.
        </ReactTooltip>
        <div className="item" data-tip data-for="tooltipAnimation" onClick={() => {onActivateAnimation()}}>
            <svg className="bubble-element" xmlns="http://www.w3.org/2000/svg" width="80" viewBox="0 0 133.2 188.9">
                <g id="bubbletea">
                    <Cup color="#BABBC6"></Cup>
                </g>
            </svg>
        </div>
        <ReactTooltip id="tooltipBubble" effect="solid" place="bottom" >
            Change aléatoirement les positions du tapioca.
        </ReactTooltip>
        <div className="item" data-tip data-for="tooltipBubble" onClick={() => {onChangeBubblePosition()}}>
            <svg className="bubble-element" xmlns="http://www.w3.org/2000/svg" width="120" viewBox="0 0 133.2 188.9">
                <g id="bubbletea">
                    <Bubble rotation={rotation} color="#BABBC6"></Bubble>
                </g>
            </svg>
        </div>
    </div>
)}

export default Element