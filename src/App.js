import React, { Component } from 'react'

import './App.css'
import BubbleTea from './components/BubbleTea';
import Editor from './components/Editor'
import Element from './components/Element';

class App extends Component {

  // Teas that can be randomly generated
  surprises = [{
    title: 'Thé Tard',
      colors: {
        tea: '#0011FF', bubble: '#000000', cup: '#8FFFDA'
      }
    },
    {
      title: 'Thé Kila',
        colors: {
          tea: '#FBFF00', bubble: '#FFFFFF', cup: '#FF8F8F'
        }
    },
    {
      title: 'Thé Nis',
        colors: {
          tea: '#323224', bubble: '#D4FF00', cup: '#CCF24D'
        }
    },
    {
      title: 'Thé Lescope',
        colors: {
          tea: '#030526', bubble: '#FFFFFF', cup: '#020D5F'
        }
    },
    {
      title: 'Thé Nèbre',
        colors: {
          tea: '#8B51D2', bubble: '#000233', cup: '#171618'
        }
    },
    {
      title: 'Thé Létubbies',
        colors: {
          tea: '#11FF00', bubble: '#E100FF', cup: '#EEFF00'
        }
    }];

    fonts = [
      "RocknRoll One",
      "Shadows Into Light",
      "Dela Gothic One",
      "Indie Flower",
      "Pacifico",
    ];

  constructor(props) {
    super(props);
    this.state = {
      title: 'Thé Matcha',
      size: 80,
      waves: false,
      rotation: 0,
      animation: false,
      font: 'RocknRoll One',
      colors: { tea: '#36C90D',  bubble: '#470061',  cup: '#D7D6D5'
      }
    }
  }

  // Change the title of the BubbleTea
  onChangeTitle(newTitle) {
    this.setState({title : newTitle})
  }

  // Change the tea color
  onChangeTeaColor(color) {
    const colors = {...this.state.colors}
    colors.tea = color;
    this.setState({colors})

  }

  // Change the color of the bubbles
  onChangeBubbleColor(color) {
    const colors = {...this.state.colors}
    colors.bubble = color;
    this.setState({colors})
  }

  // Change the cup color
  onChangeCupColor(color) {
    const colors = {...this.state.colors}
    colors.cup = color;
    this.setState({colors})
  }

  // Change the size of the BubbleTea
  onChangeSize(event, newValue) {
    this.setState({size : newValue})
  }

  // Change the position of the bubbles in the Tea
  onChangeBubblePosition() {
    const min = 0
    const max = 360
    const random = min + Math.random() * (max - min)
    this.setState({rotation : random})
  }

  // Randomly generate colors & name of a BubbleTeam
  generateSurprise() {
    const surpriseIdx = Math.floor(Math.random() * 6)
    const surprise = this.surprises[surpriseIdx]
    this.setState(surprise)
    this.onChangeFont()
    this.onChangeBubblePosition()
    this.setState({waves : true})
    this.setState({animation : true})
  }

  // Change the font of the BubbleTea title
  onChangeFont(value) {
    if (value) {
      this.setState({font : value})
    } else {
      const fontIdx = Math.floor(Math.random() * 5)
      const font = this.fonts[fontIdx]
      this.setState({font : font})
    }
  }

  // Add or remove the animation of the BubbleTea
  onActivateAnimation() {
    this.setState({animation : !this.state.animation})
  }

   // Add or remove the animation of the Tea
   onActivateTeaWave() {
    this.setState({waves : !this.state.waves})
  }

  render() {
    return (
      <div className="generator">
        <div className="generator-left">
          <BubbleTea title={this.state.title} colors={this.state.colors}
                     size={this.state.size} rotation={this.state.rotation}
                     animation={this.state.animation}
                     waves={this.state.waves}
                     font={this.state.font}></BubbleTea>
          {/*Bottom panel - Allow the user to change the position of the Bubbles and to animate
                            the Cup. */}
          <Element onChangeBubblePosition={() => this.onChangeBubblePosition()}
                   onActivateAnimation={() => this.onActivateAnimation()}
                   onActivateTeaWave={() => this.onActivateTeaWave()}
                   waves={this.state.waves}
                   rotation={this.state.rotation} animation={this.state.animation}></Element>
        </div>
        {/*Left panel - Allow the user to change the color of the Tea/Cup/Bubble, the name of the BubbleTea
                        And the size of it. */}
        <Editor title={this.state.title}
                onChangeTitle={(val) => this.onChangeTitle(val)}
                onChangeTeaColor={(val) => this.onChangeTeaColor(val)}
                onChangeBubbleColor={(val) => this.onChangeBubbleColor(val)}
                onChangeCupColor={(val) => this.onChangeCupColor(val)}
                onChangeSize={(event, newValue) => this.onChangeSize(event, newValue)}
                colors = {this.state.colors} size={this.state.size} font={this.state.font}
                generateSurprise={() => this.generateSurprise()}
                onShowFonts={() => this.showFonts()}
                onChangeFont={(value) => this.onChangeFont(value)}>
        </Editor>
      </div>
    )
  }
}

export default App