import { fromJS } from 'immutable';

const initialState = {
  countOfTodo: 0,
  listOfTodo: []
}



function addTodoSerhii(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      state.listOfTodo.push(action.text)
      return Object.assign({}, state, {
        countOfTodo: action.id,
        listOfTodo: state.listOfTodo
      });

    default:
      return state;

  }
}

export default addTodoSerhii;
