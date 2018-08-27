import React, { Component } from 'react';
import './App.css';
import Header from './header'
import Images from './images'

class App extends Component {
  render() {
    return (<div>
      <Header message='InstaGram' tomato="Potato" />
      <Images />
    </div>)
  }
}

export default App;
