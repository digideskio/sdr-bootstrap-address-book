import { CHANGED_CURRENT_POST } from './actions';

const initialState = {
    currentPost: {
        author: '',
        text: ''
    },
};

const postFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGED_CURRENT_POST:
            const { currentPost } = action;
            return Object.assign({}, state, { currentPost });

    default:
        return state;
  }
}

export default  postFormReducer;
