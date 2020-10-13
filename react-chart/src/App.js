import React from 'react';
import logo from './logo.svg';
import './App.css';
import Iframe from 'react-iframe'

function App() {
  
  return (
    <div className="App">
        <p>
          iframe
        </p>
        <Iframe url="http://localhost:65413/depression/12345"
        width="400px"
        height="250px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    </div>
  );
}

export default App;
