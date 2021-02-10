const counterReducer = (state = 0, action) => { //reducers take 2 arguments: initial state and type of action.
    switch (action.type) {
        case 'INCREMENT' :
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}

export default counterReducer