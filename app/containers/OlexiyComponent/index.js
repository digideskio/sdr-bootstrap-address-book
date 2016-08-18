/**
 * Created by Olexiy Lyhun on 17.08.2016.
 */
/**
 * Created by DMedzatiy on 16-Aug-16.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import * as actionTodoApp from '../TodoApp/actions';
import { createStructuredSelector } from 'reselect';
import { getCounters, getListTodo, getOlexiyCounter } from './selectors';


class OlexiyToDo extends Component {
    componentDidMount() {

    }

    render() {
        const counter = (counters, name) => {
            const counter = counters.filter((counter)=>{
                return counter.name===name})[0];
            return counter.value;

        };
        const myCount = counter(this.props.counters,'Olexiy');

        let todoList;
        if (this.props.listTodo != null) {
            todoList = this.props.listTodo.map((el, index) => {
                return (
                    <div key={index}>
                    <li key={index} style={{float: 'left'}}>
                        {el}
                    </li>
                        <br/>
                        </div>
                );
            });
        }
        else todoList = null;
        let style;
        if (myCount === this.props.olexiyCounter)
        {
            style = {background: 'green'}
        }
        else {
            style = {background: 'red'}
        }

        let input;
        return(
            <div>
                <form onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    {
                        this.props.newItemToList(input.value);
                        this.props.onIncrementCounter('Olexiy');
                    }
                    input.value = ''
                }}
                      className="form-inline">
                    <input type="text"
                           placeholder="Enter todo"
                           className="form-control"
                           style={style}
                           ref={node => {
                               input = node
                           }}/>

                    <input type="submit"
                           className="btn btn-primary"
                           defaultValue='Post'/>
                </form>
                    <div>
                        <h4>Todo List:</h4>
                        <ol>
                            {todoList}
                        </ol>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    counters: getCounters(),
    listTodo: getListTodo(),
    olexiyCounter: getOlexiyCounter()
})


export default connect(mapStateToProps, {...actionCreators, ...actionTodoApp})(OlexiyToDo);


