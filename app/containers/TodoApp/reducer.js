/**
 * Created by DMedzatiy on 16-Aug-16.
 */

const initialState = {
    userName:'',
    counter: 0,
    olexiyCounter: 0
};

function TodoAppReducer (state=initialState, action) {
    switch (action.type) {
        case "CHANGE_USERNAME":
            return {...state, ...{userName: action.userName}};
        case "INCREMENT": {
            switch (action.index) {
                case 'olexiy':
                    return {...state,...{olexiyCounter: state.olexiyCounter + 1}};
                default:
                    return state;
            }
        }
        case "DECREMENT":
            return {...state, ...{counter: state.counter - 1}};
        default:
            return state;
    }
}

export default TodoAppReducer;