import React, { Component } from 'react';
import NavBaar from './components/Navbar/NavBaar';
import Mainbody from './components/Body/Mainbody';
// import Mynew from './components/Body/Mynew';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBaar />
        <Mainbody />
      </div>
    );
  }
}

export default App;
