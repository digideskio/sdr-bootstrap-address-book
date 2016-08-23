import { CHANGE_LIST_OF_MESSAGES } from './actions';

const initialState = {
    listOfMessages: []
};

const changeListReducer = (state=initialState, action) => {
    switch (action.type) {
        case CHANGE_LIST_OF_MESSAGES:
            const { listOfMessages } = action;
            return Object.assign({}, state, {listOfMessages});

        default:
            return state;
    }
}

export default changeListReducer;
