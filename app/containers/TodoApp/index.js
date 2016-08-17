/**
 * Created by DMedzatiy on 16-Aug-16.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { newUserName, onIncrement } from './actions';
import * as actionCreators from './actions'


class TodoApp extends Component {
    componentDidMount() {

    }

    render() {
        console.log(this.props);
        return(
            <div>
                <h3>Global state userName:  {this.props.userName}</h3>
                        <input
                            id="username"
                            type="text"
                            placeholder="username"
                            onChange={this.props.newUserName}
                        />
                <p>Counter = {this.props.counter}</p>
                <input type="button" className="btn btn-primary" onClick={this.props.onIncrement} defaultValue='+'/>
                <input type="button" className="btn btn-primary" onClick={this.props.onDecrement} defaultValue='-'/>
            </div>
        )
    }
}
/*
TodoApp.propTypes = {
    children: PropTypes.node.isRequired,
    userName: React.PropTypes.object,
    onChange: React.PropTypes.func
};

TodoApp.defaultProps = {
    userName: 'user',
    counter: 0
};*/
/*
function mapDispatchToProps(dispatch) {
    return {
        onChange: (e) => {
            e.preventDefault();
            dispatch(newUserName(e.target.value));
        },
        dispatch,
        onIncrement:(e) =>
        {
            e.preventDefault();
            dispatch(onIncrement());
        }
    }
}*/

const mapStateToProps = (state) => {
    return {
        userName: state.get('userName').userName,
        counter: state.get('userName').counter
    }
};

export default connect(mapStateToProps, actionCreators)(TodoApp);

