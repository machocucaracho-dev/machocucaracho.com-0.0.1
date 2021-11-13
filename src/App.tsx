import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/index'
import Overview from './Components/Eth-Overview/index'
import {Button} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
import Navigation from './Components/Navigation/index'
function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation />
      <Overview/>
    </div>
  );
}



export default App;
