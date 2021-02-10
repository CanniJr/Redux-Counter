const lockReducer = (state = true, action) => {
    switch (action.type) {
        case 'UNLOCK':
            return !state
        default:
            return state
    }
}

export default lockReducer