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

export const sendPostAction = () => {
    return (dispatch, getState) => {
        const newPost = getState().get('postForm').currentPost;
        const niknamesList = getState().get('nicknames').nicknamesList;
        const currentNickIndex = getState().get('nicknames').currentNickIndex;
        const currentAuthor = niknamesList[currentNickIndex];
        return fetchSendPost(newPost)
            .then( () => {
                const { author } = newPost;
                dispatch(changeCurrentPostAction(currentAuthor, ' '));
            })
            .catch(err => console.log(err));
    }
}
