/**
 * Created by Olexiy Lyhun on 17.08.2016.
 */
const initialState = {
    listTodo: null,
    olexiyCounter: 0
};

function OlexiyTodo (state=initialState, action) {
    switch (action.type) {
        case "CHANGE_LIST":
            if (state.listTodo)
                return {...state, ...{listTodo: state.listTodo.concat(action.newItem), olexiyCounter: state.olexiyCounter + 1}};
            else
                return {...state, ...{listTodo: [action.newItem], olexiyCounter: state.olexiyCounter + 1}};
        default:
            return state;
    }
}

export default OlexiyTodo;