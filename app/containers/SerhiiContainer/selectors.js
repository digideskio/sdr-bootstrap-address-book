import { createSelector } from 'reselect';

const getCountOfTodo = () => (state) => state.get('addSerhii').countOfTodo;

const getListOfTodo = () => (state) => state.get('addSerhii').listOfTodo;

export {
  getCountOfTodo,
  getListOfTodo
};
