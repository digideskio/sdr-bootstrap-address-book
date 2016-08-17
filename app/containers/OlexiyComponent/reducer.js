/**
 * Created by Olexiy Lyhun on 17.08.2016.
 */
const initialState = {
    listTodo: null,
    counter: 0
};

function OlexiyTodo (state=initialState, action) {
    switch (action.type) {
        case "CHANGE_LIST":
            if (state.listTodo)
                return {...state, ...{listTodo: state.listTodo.concat(action.userName), counter: state.counter + 1}};
            else
                return {...state, ...{listTodo: [action.userName], counter: state.counter + 1}};
        default:
            return state;
    }
}

export default OlexiyTodo;