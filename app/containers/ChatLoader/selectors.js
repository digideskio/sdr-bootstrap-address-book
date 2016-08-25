
const getListOfMessages = () => (state) => state.get('chatLoader').listOfMessages;
const getIsFetching = () => (state) => state.get('chatLoader').isFetching;

export {
    getListOfMessages,
    getIsFetching,
    
};
