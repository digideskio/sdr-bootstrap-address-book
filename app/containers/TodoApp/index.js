/**
 * Created by DMedzatiy on 16-Aug-16.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './actions'


class TodoApp extends Component {
    componentDidMount() {

    }

    render() {
        console.log(this.props);
        const rowStyle = {
            textAlign: "center",
            border: "solid 2px black",
            borderRadius: "5px",
            backgroundColor: "#e2e2e2",
            margin: "1em"
        };

        const componentsDiv = {
            border: "solid 1px grey",
            borderRadius: "2px",
            backgroundColor: "#f2f2f2"

        };

        return(
            <div className="conteiner">
                <div className="row" style={rowStyle}>
                    <div className="col-lg-4">
                        <h2>Serhii todos</h2>
                        <h2>Counter value: </h2>
                    </div>
                    <div className="col-lg-4">
                        <h2>Olexiy todos</h2>
                        <h2>Counter value: </h2>
                    </div>
                    <div className="col-lg-4">
                        <h2>Dima todos</h2>
                        <h2>Counter value: </h2>
                    </div>
                </div>
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

export default connect(mapStateToProps)(TodoApp);
