/**
 * Created by DMedzatiy on 16-Aug-16.
 */

const initialState = {
    userName:''
};

function TodoAppReducer (state=initialState, action) {
    switch (action.type) {
        case "CHANGE_USERNAME":
            return Object.assign({},state,{userName: action.userName});
        default:
            return state;
    }
}

export default TodoAppReducer;