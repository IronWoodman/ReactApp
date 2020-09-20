import React from 'react';
import './App.css';
const OSRM = require('osrm');

function App() {
  console.log('=version', OSRM.version);
  // const osrm = new OSRM('./static/kor.osrm');

  return (
    <div className="App">
      <header className="App-header">
        <p>
          React App Started
        </p>        
      </header>
    </div>
  );
}

export default App;
