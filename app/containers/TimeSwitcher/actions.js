
export const changeTimeOfUpdateAction = (timeOfUpdate) => {
    return {
        type: 'CHANGE_TIME_OF_UPDATE',
        timeOfUpdate
    }
}


export const incrementSecondsAction = () => {
    return {
        type: 'INCREMENT_SECONDS',
    }
}

export const clearSecondsAction = () => {
    return {
        type: 'CLEAR_SECONDS',
    }
}
