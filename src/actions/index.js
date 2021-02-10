export const increment = (input = 1) => {
    return {
        type: 'INCREMENT',
        payload: input
    }
}

export const decrement = (input = 1) => {
    return {
        type: 'DECREMENT',
        payload: input
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}

export const key = () => {
    return {
        type: 'LOCK/UNLOCK'
    }
}