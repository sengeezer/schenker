import React from 'react';
import EnhancedForm from './Wizard';
import logo from '../company-logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Patient Check-in</h1>
      </header>
      <EnhancedForm />
    </div>
  );
}

export default App;
