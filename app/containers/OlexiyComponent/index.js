/**
 * Created by Olexiy Lyhun on 17.08.2016.
 */
/**
 * Created by DMedzatiy on 16-Aug-16.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './actions'
import * as actionTodoApp from '../TodoApp/actions';


class OlexiyToDo extends Component {
    componentDidMount() {

    }

    render() {
        //console.log(this.props);
        let todoList;
        if (this.props.listTodo != null) {
            todoList = this.props.listTodo.map((el, index) => {
                return (
                    <div>
                    <li key={index} style={{float: 'left'}}>
                        {el}
                    </li>
                        <br/>
                        </div>
                );
            });
        }
        else todoList = null;

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
                        this.props.onIncrement('olexiy');
                    }
                    input.value = ''
                }}
                      className="form-inline">
                    <input type="text"
                           placeholder="Enter todo"
                           className="form-control"
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

const mapStateToProps = (state) => {
    return {
        listTodo: state.get('olexiyTodo').listTodo,
        counter: state.get('olexiyTodo').counter,
        olexiyCounter: state.get('userName').olexiyCounter
    }
};

export default connect(mapStateToProps, {...actionCreators, ...actionTodoApp})(OlexiyToDo);


