import React from 'react';
import Activity from './components/Activity';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Get Chuck Norris Wisdom Here...</h1>
        <img className="chuck"></img>
        <Activity/>
      </header>
    </div>
  );
}

export default App;
