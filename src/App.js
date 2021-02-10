import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement, reset, key} from './actions'


function App() {
  const counter = useSelector(state => state.counter);
  const lock = useSelector(state => state.lock);
  const dispatch = useDispatch();

  return (
    <>
      { !lock ?
        <div className='app'>
          <h1>Redux Counter {counter}</h1>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(increment(5))}>+ 5</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(decrement(5))}>- 5</button>
          <button onClick={() => dispatch(reset())}>reset</button>
          <button onClick={() => dispatch(key())}>Lock Page!</button>
        </div>
        :
        <div>
          <h1>Press button to unlock</h1>
          <button onClick={() => dispatch(key())}>Unleash Redux!</button>
        </div>
    }
      </>
  );
}

export default App;
