const lockReducer = (state = true, action) => {
    switch (action.type) {
        case 'LOCK/UNLOCK':
            return !state
        default:
            return state
    }
}

export default lockReducer