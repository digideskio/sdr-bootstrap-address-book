/**
 * Created by DMedzatiy on 17-Aug-16.
 */

import React, { Component } from 'react';
import * as actionCreators from './actions';
import { getCounters } from '../../containers/TodoApp/selectors';
import { createStructuredSelector } from 'reselect';
import { getDimaTodos } from './selectors';
import { connect } from 'react-redux';
import { uniqueId } from 'lodash';
import * as actionCreatorsTodoApp from '../../containers/TodoApp/actions';


class DimaComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTodo:'',

        };
        this.onChangeCurrentTodo = this.onChangeCurrentTodo.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChangeCurrentTodo(e) {
        this.setState({currentTodo: e.target.value})
    }
    onClick() {
        this.props.onAddTodo(this.state.currentTodo);
        this.props.onIncrementCounter("Dima");
        this.setState({ currentTodo: ''});
    }

    render(){
        
        const todos = this.props.todos.map((todo,index)=> {
        return(
            <li key={index}>{todo}</li>
        )});

        const counter = (counters, name) => {
            const counter = counters.filter((counter)=>{
                return counter.name===name})[0];
            return counter.value;
        };
        
        return (
            <div>
                <div>
                    <h5>Global counter: {counter(this.props.todoAppCounters,"Dima")}</h5>
                </div>
                <div style={{textAlign: "left"}}>
                    <ul>
                        {todos}
                    </ul>
                </div>
                <input placeholder="Add todo"
                       value={this.state.currentTodo}
                       onChange={this.onChangeCurrentTodo}
                />
                <button className="btn btn-info"
                        onClick={this.onClick}
                >Add todo</button>
            </div>    
        )
    }
}

DimaComponent.propTypes = {
    todoAppCounters: React.PropTypes.array,
    todos: React.PropTypes.array
};

DimaComponent.defaultProps = {
    todos: []
};

const mapStateToProps = createStructuredSelector({
    todoAppCounters: getCounters(),
    todos: getDimaTodos(),

});

export default connect(mapStateToProps, {...actionCreators, ...actionCreatorsTodoApp})(DimaComponent);

