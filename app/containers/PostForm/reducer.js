
const initialState = {
    currentPost: {
        author: '',
        text: ''
    },
};

export default function postFormReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGED_CURRENT_POST':
            return Object.assign({}, state, {
                currentPost: action.currentPost,
            });

    default:
        return state;
  }
}
