import React from 'react';
import EnhancedForm from './Wizard';
import logo from '../company-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <EnhancedForm />
    </div>
  );
}

export default App;
