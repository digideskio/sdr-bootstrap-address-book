const initialState = {
    timeOfUpdate: 1000,
    totalSeconds: 0,
}

const timeSwitcherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TIME_OF_UPDATE':
            return {
                ...state,
                timeOfUpdate: action.timeOfUpdate
            };
        case 'INCREMENT_SECONDS':
            return {
                ...state,
                totalSeconds: state.totalSeconds + 1
            };

        case 'CLEAR_SECONDS':
            return {
                ...state,
                totalSeconds: 0
            };
        default:
            return state;
    }
}

export default timeSwitcherReducer;
