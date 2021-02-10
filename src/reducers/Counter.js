const counterReducer = (state = 0, action) => { //reducers take 2 arguments: initial state and type of action.
    switch (action.type) {
        case 'INCREMENT' :
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        case 'RESET': 
            return state = 0
        default:
            return state
    }
}

export default counterReducer