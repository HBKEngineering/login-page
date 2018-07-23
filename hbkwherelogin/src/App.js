import React, { Component } from 'react';
import './App.css';
import LoginContainer from './components/Login/LoginContainer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{fontFamily: 'Roboto'}}>
        <LoginContainer/>
      </div>
    );
  }
}

export default App;
