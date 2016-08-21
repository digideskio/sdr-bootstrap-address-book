import { fetchPost } from 'api';

export const changeCurrentPostAction = (author, text) => {
    return {
        type: 'CHANGED_CURRENT_POST',
        currentPost: {
            author,
            text
        }
    }
}

export const sendPostAction = () => {
    return (dispatch, getState) => {
        let newPost = getState().get('postForm').currentPost;
        return fetchPost(newPost)
            .then( () => {
                const { author } = newPost;
                dispatch(changeCurrentPostAction(author, ' '));
            })
            .catch(err => console.log(err));
    }
}
