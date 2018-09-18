import React, { Component } from 'react';
import '../assets/css/App.css';
import PetList from './PetList';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <PetList />
      </div>
    );
  }
}

export default App;
