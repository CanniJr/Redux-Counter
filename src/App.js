import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'


function App() {
  const counter = useSelector(state => state.counter);
  const lock = useSelector(state => state.lock);
  const dispatch = useDispatch();

  return (
    <div className='app'>
      <h1>Redux Counter {counter}</h1>
      <button>+</button>
      <button>+ 5</button>
      <button>-</button>
      <button>- 5</button>
      <button>reset</button>
      <button>Lock page!</button>
    </div>
  );
}

export default App;
