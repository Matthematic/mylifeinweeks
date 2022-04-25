import React from 'react';
import Header from './Header';
import './App.css';
import Life from './Life';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="poster">
        <Life birthday="03-17-1993"/>
      </div>
    </div>
  );
}

export default App;
