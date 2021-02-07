import './App.css';
import React from 'react'

function App() {
  return (
    <div className="app">
      <h1>Hello Redux!</h1>
      <div className='counter'>
        <h3>Counter</h3>
        <p>0</p>
      </div>
      <button>+</button>
      <button>-</button>
      <button>Reset</button>
    </div>
  );
}

export default App;
