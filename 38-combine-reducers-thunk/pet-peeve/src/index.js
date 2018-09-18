import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();



// Starting: Setup this stuff first!
// 1. createStore, => 5 ====> need a reducer
// 2. create a reducer, => 3 ==>
// 3. Provider, => 1 ===> needs a store

// Ok, what to connect? What to map things to?
//  mapStateToProps,
//  mapDispatchToProps,
//  connect

// Worry about this later!
// actions,
//  dispatch,


// What would we do with **just** React.
//
// Redux Store's State ==> pets: [], currentPet: {}
//
// App
//  UploadForm <== own local state
//  PetList
//    Pet
//  PetProfile
