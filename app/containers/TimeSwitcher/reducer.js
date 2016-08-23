const initialState = {
    timeOfUpdate: 1000
}

const timeSwitcherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TIME_OF_UPDATE':
            return {
                ...state,
                timeOfUpdate: action.timeOfUpdate
            }

        default:
            return state;
    }
}

export default timeSwitcherReducer;
