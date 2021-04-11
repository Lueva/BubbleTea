import Bubble from './Bubble'
import Tea from './Tea'
import Cup from './Cup'
import './Element.css'

const Element = ({onChangeBubblePosition, rotation}) => (
    <div className="element">
        <div className="item">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" viewBox="0 0 133.2 188.9">
                <g id="bubbletea">
                    <Tea color="#BABBC6"></Tea>
                </g>
            </svg>
        </div>
        <div className="item">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" viewBox="0 0 133.2 188.9">
                <g id="bubbletea">
                    <Cup color="#BABBC6"></Cup>
                </g>
            </svg>
        </div>
        <div className="item" onClick={() => {onChangeBubblePosition()}}>
            <svg className="bubble-element" xmlns="http://www.w3.org/2000/svg" width="120" viewBox="0 0 133.2 188.9">
                <g id="bubbletea">
                    <Bubble rotation={rotation} color="#BABBC6"></Bubble>
                </g>
            </svg>
        </div>
    </div>
)

export default Element