import React, { Component } from 'react';
import '../assets/css/App.css';
import PetList from './PetList';
import PetProfile from './PetProfile';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <PetList />
        <PetProfile />
      </div>
    );
  }
}

export default App;
