const initialState = {
  postedComment: {}
};


function postNewCommentReducer(state = initialState, action) {
  switch (action.type) {
    case "POST_COMMENT":
      return Object.assign({}, state, {
        postedComment: action.comment,
      });

    default:
      return state;

  }
}

export default postNewCommentReducer;
