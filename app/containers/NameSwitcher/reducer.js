/**
 * Created by Admin on 22.08.2016.
 */

const initialState = {
    nicknamesList:[],
    currentNickIndex: 0
};

function nicknamesReducer(state=initialState, action) {
    switch (action.type) {
        case "ADD_NICKNAME":
            return {
                nicknamesList: state.nicknamesList.concat(action.newNickname),
                currentNickIndex: state.nicknamesList.length
            };
        case "DEL_NICKNAME":
            return {
                ...state
            };
        case "CHANGE_CURRENT_NICK":
            return Object.assign(
                {},
                {...state},
                {currentNickIndex: action.newCurrentIndex}
            );
        default:
            return state;

    }
}

export default nicknamesReducer;