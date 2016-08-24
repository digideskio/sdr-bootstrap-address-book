import { fetchGetPosts } from 'api';
import { incrementSecondsAction, clearSecondsAction } from 'containers/TimeSwitcher/actions';
export const CHANGE_LIST_OF_MESSAGES = 'CHANGE_LIST_OF_MESSAGES';

export function changeMassegeListAction(listOfMessages) {
    return {
        type: CHANGE_LIST_OF_MESSAGES,
        listOfMessages
    };
}

export const getMassegeListAction = () => (dispatch, getState) => {
        const previousListOfMessages = getState().get('chatLoader').listOfMessages; //for compare
        const timeOfUpdate = getState().get('timeSwitch').timeOfUpdate; //for refetch
        dispatch(clearSecondsAction()); //reboot TimeSwitcher
        return fetchGetPosts()
            .then( res => {
                const { messages } = res;
                if(!_.isEqual(previousListOfMessages, messages)) {
                    dispatch(changeMassegeListAction(messages));
                }
                setTimeout(() => {
                    console.log("i start");
                    dispatch(getMassegeListAction())
                }, timeOfUpdate);
            })
            .catch(error => {
                console.log(error);
                setTimeout(() => {
                    dispatch(getMassegeListAction())
                }, timeOfUpdate);
            });
        };
