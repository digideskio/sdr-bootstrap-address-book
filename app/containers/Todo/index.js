//Holds application state;
//Allows access to state via getState()
//Allows state to be updated via dispatch(action)
//Registers listeners via subscrive(listener);
//Handles unregistering of listeners via function returned by subscrive(listener)

// YOU WILL ONLY HAVE A SINGLE STORE IN A REDUX application

import { createStore } from 'redux'
import todoApp from './reducers'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions'
import React from 'react';
import configureStore from '../../store';

export default class ToDo extends React.Component {



  render() {
    let store = createStore(todoApp)
    console.log(store.getState())

    // subscribe() returns a function for unregistering the listener
    let unsubscribe = store.subscribe(() =>
      console.log(store.getState())
    )

    // Dispatch some actions
    store.dispatch(addTodo('Learn about actions'))
    store.dispatch(addTodo('Learn about reducers'))
    store.dispatch(addTodo('Learn about store'))
    store.dispatch(toggleTodo(0))
    store.dispatch(toggleTodo(1))
    store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

    // Stop listening to state updates
    unsubscribe()

    return (
        <div>
          <h1>Hello, Redux!</h1>
        </div>
    );
  }
}
