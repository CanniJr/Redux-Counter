import counterReducer from './Counter'
import lockReducer from './Lock'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    lock: lockReducer
})

export default allReducers