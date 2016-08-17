/**
 * Created by DMedzatiy on 16-Aug-16.
 */

const initialState = {
    userName:'',
    counter: 0
};

function TodoAppReducer (state=initialState, action) {
    switch (action.type) {
        case "CHANGE_USERNAME":
            return {...state, ...{userName: action.userName}};
        case "INCREMENT":
            return {...state, ...{counter: state.counter + 1}};
        case "DECREMENT":
            return {...state, ...{counter: state.counter - 1}};
        default:
            return state;
    }
}

export default TodoAppReducer;