import { fromJS } from 'immutable';

const initialState = fromJS({
  countOfTodo: 0,
  listOfTodo: []
})

let list = []

function addToDoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      list.push(action.text)
      return Object.assign({}, state, {countOfTodo: action.id, listOfTodo: list});

    default:
      return state;

  }
}

export default addToDoReducer
