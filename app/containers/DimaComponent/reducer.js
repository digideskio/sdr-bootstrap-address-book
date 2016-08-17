/**
 * Created by DMedzatiy on 17-Aug-16.
 */

const initialState = {
    todos: []
};

function dimaComponentReducer(state=initialState, action) {
    switch (action.type) {
        case "ON_ADD_TODO": {
            return Object.assign({},
            state,
                {todos: state.todos.concat(action.todo)})
        }
        default: {
            return state;
        }    
    }
}

export default dimaComponentReducer;