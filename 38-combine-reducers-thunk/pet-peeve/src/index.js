import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// What would we do with **just** React.
//
// Redux Store's State ==> pets: [], currentPet: {}
//
// App
//  UploadForm <== own local state
//  PetList
//    Pet
//  PetProfile
