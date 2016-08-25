import {
    CHANGE_LIST_OF_MESSAGES,
    START_FETCHING,
    STOP_FETCHING

} from './actions';

const initialState = {
    listOfMessages: [],
    isFetching: true
};

const changeListReducer = (state=initialState, action) => {
    switch (action.type) {
        case CHANGE_LIST_OF_MESSAGES:
            const { listOfMessages } = action;
            return Object.assign({}, state, {listOfMessages});
        case START_FETCHING:
            return {
                ...state,
                isFetching: true
            }
        case STOP_FETCHING:
            return {
                ...state,
                isFetching: false
            }
        default:
            return state;
    }
}

export default changeListReducer;
