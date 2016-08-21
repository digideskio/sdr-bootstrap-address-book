
const initialState = {
    currentComment: {author: '', text: ''}
};

export default function postFormReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGED_CURRENT_COMMENT':
            return Object.assign({}, state, {
                currentComment: action.currentComment,
            });

    default:
        return state;
  }
}
