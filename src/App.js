import React, { Component } from 'react';
import './App.css'
import ColorPicker from './components/ColorPicker'
import SizeSetting from './components/SizeSetting'
import Reset from './components/Reset'
import Result from './components/Result'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 15
    }
  }

  onSetColor = (params) => {
    this.setState({
      color: params
    });
  }

  onSetSize = (params) => {
    this.setState({
      fontSize: params
    });
  }


  setDefault = (params)=> {
    if (params) {
      this.setState({
        color: 'red',
        fontSize: 15
      });
    }
  }

  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting size={this.state.fontSize} onReceiveSize={this.onSetSize} />
            <Reset onReceiveDefault={this.setDefault} />
          </div>
          <Result color={this.state.color} size={this.state.fontSize} />
        </div>
      </div>

    );
  }
}

export default App;
