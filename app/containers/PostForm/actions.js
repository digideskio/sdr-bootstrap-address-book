import { fetchPost } from 'containers/App/RestApi';

export const changeCurrentComment = (currentComment) => {
    return {
        currentComment,
        type: 'CHANGED_CURRENT_COMMENT',
    }
}

export const sendPost = (post) => {
    return (dispatch) => {
        return fetchPost(post)
            .then( () => {
                dispatch(changeCurrentComment({authot: post.author, text: ''}));
            })
            .catch(err => console.log(err));
    }
}
