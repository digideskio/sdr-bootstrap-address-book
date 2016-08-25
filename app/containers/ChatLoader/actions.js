import { fetchGetPosts } from 'api';
import { clearSecondsAction } from 'containers/TimeSwitcher/actions';

export const CHANGE_LIST_OF_MESSAGES = 'CHANGE_LIST_OF_MESSAGES';
export const START_FETCHING = 'START_FETCHING';
export const STOP_FETCHING = 'STOP_FETCHING';

export const changeMassegeListAction = (listOfMessages) => {
    return {
        type: CHANGE_LIST_OF_MESSAGES,
        listOfMessages
    };
}

export const startFetchingAction = () => {
    return {
        type: START_FETCHING
    }
}

export const stopFetchingAction = () => {
    return {
        type: STOP_FETCHING
    }
}

export const getMassegeListAction = () => (dispatch, getState) => {

    const isFetching = getState().get('chatLoader').isFetching;
    if (!isFetching) {
        dispatch(startFetchingAction());
        return;
    }
    //for compare with listOfMessages from server
    const previousListOfMessages = getState().get('chatLoader').listOfMessages;
    //get time of update list of messages
    const timeOfUpdate = getState().get('timeSwitch').timeOfUpdate;
    //set Timer in TimeSwitcher to 0
    dispatch(clearSecondsAction());
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
