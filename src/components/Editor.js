import ElementColorPicker from './ElementColorPicker'
import Slider from '@material-ui/core/Slider';
import ReactTooltip from 'react-tooltip';
import FontList from './FontList';

import './Editor.css'

const Editor = ({onChangeTitle, onChangeSize, title, size, colors, font,
                 onChangeTeaColor, onChangeBubbleColor, onChangeCupColor, generateSurprise, onChangeFont}) => {
    return (
    <div className="editor">
      <h1 className="editor-title">Bubble Tea Generator</h1>
      <div className="name-section">
        <ReactTooltip id="tooltipName" effect="solid" place="bottom" >
            Choisis le nom de ton BubbleTea.
        </ReactTooltip>
        <h2>Nom</h2>
        <input data-tip data-for="tooltipName" type="text" value={title} onChange={(event) => onChangeTitle(event.target.value)}></input>
        
      </div>
      <div className="font-section">
        <h2>Font</h2>
        <FontList data-tip data-for="tooltipFont" type="text" font={font} onChangeFont={(event) => { onChangeFont(event)}}></FontList>
      </div>
      <div>
        <ElementColorPicker element="Thé" color={colors.tea} onChangeColor={(event) => onChangeTeaColor(event)}></ElementColorPicker>
        <ElementColorPicker element="Tapioca" color={colors.bubble} onChangeColor={(event) => onChangeBubbleColor(event)}></ElementColorPicker>
        <ElementColorPicker element="Gobelet" color={colors.cup} onChangeColor={(event) => onChangeCupColor(event)}></ElementColorPicker>
      </div>
      <div className="cup-size">
        <h2>Taille</h2>
        <ReactTooltip id="tooltipSize" effect="solid" place="bottom" >
            Choisis la taille de ton BubbleTea.
        </ReactTooltip>
        <Slider data-tip data-for="tooltipSize" min={5} value={size} onChange={(event, newValue) => onChangeSize(event, newValue)} aria-labelledby="input-slider" />
      </div>
      <div className="surprise">
        <ReactTooltip id="tooltipSurprise" effect="solid" place="bottom" >
            Génère Aléatoirement un BubbleTea !
        </ReactTooltip>
        <button data-tip data-for="tooltipSurprise" className="surprise-button" onClick={() => generateSurprise()}>Surprends-moi !</button>
      </div>
    </div>
)}

export default Editor