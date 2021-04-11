import React from 'react';
import ReactTooltip from 'react-tooltip';

import './ElementColorPicker.css';

const ElementColorPicker = ({element, onChangeColor, color}) => {
    const squareStyle = {
        'height': '30px',
        'width': '30px',
        'backgroundColor': color,
        'position': 'absolute',
        'border': 'none',
        'right': '140px',
        'cursor': 'pointer'
    }
    return (
    <React.Fragment>
        <ReactTooltip id="tooltipThé" effect="solid" place="bottom" >
            Choisi ton Thé.
        </ReactTooltip>
        <ReactTooltip id="tooltipTapioca" effect="solid" place="bottom" >
            Choisi ton Tapioca.
        </ReactTooltip>
        <ReactTooltip id="tooltipGobelet" effect="solid" place="bottom" >
            Choisi ton Gobelet.
        </ReactTooltip>
        <div className="element-picker">
            <h2> {element} </h2>
            <input id="color-picker" data-tip data-for={"tooltip" + element} type="color" value={color} style={squareStyle} onChange={(event) => onChangeColor(event.target.value)} />  
        </div>
    </React.Fragment>
)}

export default ElementColorPicker