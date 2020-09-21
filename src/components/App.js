import React from 'react';
import EnhancedForm from './Wizard';
import logo from '../company-logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header flex-item">
        <img src={logo} className="App-logo" alt="Company logo" />
        <h1>Patient Check-in</h1>
      </header>
      <EnhancedForm className="flex-item wizard-container" />
    </div>
  );
}

export default App;
