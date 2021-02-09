import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement, reset, login, logout} from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const logged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h1>Hello Redux!</h1>
      <div className='counter'>
        <h3>Counter</h3>
        <p>{counter}</p>
      </div>
      <button
        onClick={() => dispatch(increment())}>+</button>
      <button
        onClick={() => dispatch(decrement())}>-</button>
      <button
        onClick={() => dispatch(reset())}>Reset</button>
      <button
        onClick={() => dispatch(increment(5))}>+ 5</button>
      <button
        onClick={() => dispatch(decrement(5))}>- 5</button>

      <button
        onClick={() => dispatch(login())}>Log in</button>
      <button
        onClick={() => dispatch(logout())}>Log out</button>
      {logged ?
        <h3>This is the secret!</h3> :
        <h3>You must be logged in to see this information! </h3>
      }
    </div>
  );
}

export default App;
