/**
 * Created by Olexiy Lyhun on 18.08.2016.
 */
const getListOfMessages = () => (state) => state.get('chatLoader').listOfMessages;

export {
    getListOfMessages
};
