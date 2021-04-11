import ElementColorPicker from './ElementColorPicker'
import Slider from '@material-ui/core/Slider';
import ReactTooltip from 'react-tooltip';

import './Editor.css'

const Editor = ({onChangeTitle, onChangeSize, title, size, colors,
                 onChangeTeaColor, onChangeBubbleColor, onChangeCupColor}) => {
    return (
    <div className="editor">
      <h1 className="editor-title">Bubble Tea Generator</h1>
      <div className="name-section">
        <ReactTooltip id="tooltipName" effect="solid" place="bottom" >
            Choisi le nom de ton BubbleTea.
        </ReactTooltip>
        <h2>Nom</h2>
        <input data-tip data-for="tooltipName" type="text" value={title} onChange={(event) => onChangeTitle(event.target.value)}></input>
      </div>
      <div>
        <ElementColorPicker element="Thé" color={colors.tea} onChangeColor={(event) => onChangeTeaColor(event)}></ElementColorPicker>
        <ElementColorPicker element="Tapioca" color={colors.bubble} onChangeColor={(event) => onChangeBubbleColor(event)}></ElementColorPicker>
        <ElementColorPicker element="Gobelet" color={colors.cup} onChangeColor={(event) => onChangeCupColor(event)}></ElementColorPicker>
      </div>
      <div className="cup-size">
        <h2>Taille</h2>
        <ReactTooltip id="tooltipSize" effect="solid" place="bottom" >
            Choisi la taille de ton BubbleTea.
        </ReactTooltip>
        <Slider data-tip data-for="tooltipSize" value={size} onChange={(event, newValue) => onChangeSize(event, newValue)} aria-labelledby="input-slider" />
      </div>
    </div>
)}

export default Editor