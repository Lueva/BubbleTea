import React, { Component } from 'react'

import './App.css'
import BubbleTea from './components/BubbleTea';
import Editor from './components/Editor'
import Element from './components/Element';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Thé Nèbre',
      size: 80,
      rotation: 0,
      colors: {
        tea: '#FFB29E',
        bubble: '#404162',
        cup: '#FFECE7'
      }
    };
    this.onChangeBubblePosition = this.onChangeBubblePosition.bind(this);
  }

  onChangeTitle(newTitle) {
    this.setState({title : newTitle})
  }

  onChangeTeaColor(color) {
    const colors = {...this.state.colors}
    colors.tea = color;
    this.setState({colors})

  }

  onChangeBubbleColor(color) {
    const colors = {...this.state.colors}
    colors.bubble = color;
    this.setState({colors})
  }

  onChangeCupColor(color) {
    const colors = {...this.state.colors}
    colors.cup = color;
    this.setState({colors})
  }

  onChangeSize(event, newValue) {
    this.setState({size : newValue})
  }

  onChangeBubblePosition() {
    const min = 0;
    const max = 360;
    const random = min + Math.random() * (max - min);
    this.setState({rotation : random})
  }

  render() {
    return (
      <div className="generator">
        <div className="generator-left">
          <BubbleTea title={this.state.title} colors={this.state.colors}
                     size={this.state.size} rotation={this.state.rotation}></BubbleTea>
          {/*Bottom panel - Allow the user to change the position of the Bubble and to change the filling
                            of the Cup. */}
          <Element onChangeBubblePosition={() => this.onChangeBubblePosition()}
                   rotation={this.state.rotation}></Element>
        </div>
        {/*Left panel - Allow the user to change the color of the Tea/Cup/Bubble, the name of the BubbleTea
                        And the size of it. */}
        <Editor title={this.state.title}
                onChangeTitle={(val) => this.onChangeTitle(val)}
                onChangeTeaColor={(val) => this.onChangeTeaColor(val)}
                onChangeBubbleColor={(val) => this.onChangeBubbleColor(val)}
                onChangeCupColor={(val) => this.onChangeCupColor(val)}
                onChangeSize={(event, newValue) => this.onChangeSize(event, newValue)}
                colors = {this.state.colors}
                size={this.state.size}>
        </Editor>
      </div>
    )
  }
}

export default App