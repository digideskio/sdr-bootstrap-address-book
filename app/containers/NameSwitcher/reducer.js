/**
 * Created by Admin on 22.08.2016.
 */

const initialState = {
    nicknamesList:[],
    currentNickIndex: 0
};

function deleteNick(nicksList, index){
    return nicksList
        .slice(0,index)
        .concat(nicksList.slice(index+1));
}

function nicknamesReducer(state=initialState, action) {
    switch (action.type) {
        case "ADD_NICKNAME":
            return {
                nicknamesList: state.nicknamesList.concat(action.newNickname),
                currentNickIndex: state.nicknamesList.length
            };
        case "CHANGE_CURRENT_NICK":
            return Object.assign(
                {},
                {...state },
                {currentNickIndex: action.nicknameIndex}
            );
        case "DEL_NICKNAME": {
            const nicksList = state.nicknamesList;
            const index = action.nicknameIndex;
            if (nicksList.length > 1) {
                return {
                    nicknamesList: deleteNick(nicksList,index),
                    currentNickIndex: index > 0 ? index-1 : index
                }
            } else {
                return state;
        }}
        default:
            return state;

    }
}

export default nicknamesReducer;