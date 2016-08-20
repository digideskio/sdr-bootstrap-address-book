/**
 * Created by Olexiy Lyhun on 18.08.2016.
 */

const initialState = {
    chatList: []
};

function changeListReducer (state=initialState, action) {
    switch (action.type) {
        case "CHANGE_LIST":
            return {...state, ...{chatList: action.newList}};
        default:
            return state;
    }
}

export default changeListReducer;