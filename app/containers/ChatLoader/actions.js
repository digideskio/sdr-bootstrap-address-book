import { fetchGetPosts } from 'api';

export const CHANGE_LIST_OF_MESSAGES = 'CHANGE_LIST_OF_MESSAGES';

export function changeMassegeListAction(listOfMessages) {
    return {
        type: CHANGE_LIST_OF_MESSAGES,
        listOfMessages
    };
}

export const getMassegeListAction = (timeOfUpdate) => (dispatch, getState) => {
        const previousListOfMessages = getState().get('chatLoader').listOfMessages;
        return fetchGetPosts()
            .then( res => {
                const { messages } = res;
                if(!_.isEqual(previousListOfMessages, messages)) {
                    dispatch(changeMassegeListAction(messages));
                }
                setTimeout(() => {
                    dispatch(getMassegeListAction(timeOfUpdate))
                }, timeOfUpdate);
            })
            .catch(error => {
                console.log(error);
                setTimeout(() => {
                    dispatch(getMassegeListAction(timeOfUpdate))
                }, timeOfUpdate);
            });
        }
