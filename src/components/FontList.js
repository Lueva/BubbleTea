import ReactTooltip from 'react-tooltip';
import React from 'react';

import './FontList.css'

const FontList = ({onChangeFont, font}) => (
    <React.Fragment>
        <ReactTooltip id="tooltipFont" effect="solid" place="bottom" >
            Choisis la police pour le nom.
        </ReactTooltip>
        <select className="font-list" data-tip data-for="tooltipFont" value={font} onChange={(element) => {onChangeFont(element.target.value)}}>
           <option value="RocknRoll One">RocknRoll One</option>
           <option value="Shadows Into Light">Shadows Into Light</option>
           <option value="Dela Gothic One">Dela Gothic One</option>
           <option value="Indie Flower">Indie Flower</option>
           <option value="Pacifico">Pacifico</option>
         </select>
    </React.Fragment>
)

export default FontList