import { fetchPost } from 'api';

export const changeCurrentComment = (currentComment) => {
    return {
        currentComment,
        type: 'CHANGED_CURRENT_COMMENT',
    }
}

export const sendPost = (post) => {
    return (dispatch, getState) => {
        return fetchPost(post)
            .then( () => {
                dispatch(changeCurrentComment({author: post.author, text: ''}));
            })
            .catch(err => console.log(err));
    }
}
