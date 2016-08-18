/**
 * Created by Olexiy Lyhun on 18.08.2016.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import * as actionTodoApp from '../TodoApp/actions';
import { createStructuredSelector } from 'reselect';
import { getMesageList } from './selectors';

let chats = {};

class OlexiyToDo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            progress: 0
        };

    }

    componentDidMount() {
        fetch('/init').then(
            response => {
                this.setState({progress: 80});
                return response.json();
            },
            error => error
        ).then (
            res => {chats = res;
                this.setState({progress: 100,
                    loaded: true});
            }
        );
    }

    render() {
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