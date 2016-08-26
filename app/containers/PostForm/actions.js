import { fetchSendPost } from 'api';

export const CHANGED_CURRENT_POST = 'CHANGED_CURRENT_POST';

export const changeCurrentPostAction = (author, text) => {
    return {
        type: CHANGED_CURRENT_POST,
        currentPost: {
            author,
            text
        }
    }
}

export const sendPostAction = (currentAuthor) => {
    return (dispatch, getState) => {
        const newPost = getState().get('postForm').currentPost;
        return fetchSendPost(newPost)
            .then( () => {
                dispatch(changeCurrentPostAction(currentAuthor, ' '));
            })
            .catch(err => console.log(err));
    }
}
