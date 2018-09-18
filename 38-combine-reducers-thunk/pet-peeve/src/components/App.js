import React, { Component } from 'react';
import '../assets/css/App.css';
import PetList from './PetList';
import PetProfile from './PetProfile';
import UploadForm from './UploadForm';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <UploadForm />
        <PetList />
        <PetProfile />
      </div>
    );
  }
}

export default App;
