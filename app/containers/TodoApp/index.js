/**
 * Created by DMedzatiy on 16-Aug-16.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import { createStructuredSelector } from 'reselect';
import { getCounters } from './selectors';
import { getDimaTodos } from '../../containers/DimaComponent/selectors';
import *as actionCreatorsDima from '../../containers/DimaComponent/actions';




class TodoApp extends Component {

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
        const counter = (counters, name) => {
            const counter = counters.filter((counter)=>{
                return counter.name===name})[0];
            return counter.value;
        };




        return(

            <div className="conteiner">
                <div className="row">
                    <div className="col-lg-4">
                        <h2>Serhii todos</h2>
                        <h2>Counter value: {counter(this.props.counters,"Serhii")}</h2>
                    </div>
                    <div className="col-lg-4">
                        <h2>Olexiy todos</h2>
                        <h2>Counter value: {counter(this.props.counters,"Olexiy")}</h2>
                    </div>
                    <div className="col-lg-4">
                        <h2>Dima todos</h2>
                        <h2>Counter value: {this.props.dimaTodos.length}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

TodoApp.propTypes = {
    counters: React.PropTypes.array,
    dimaTodos: React.PropTypes.array,
    onIncrementCounter: React.PropTypes.func
};

TodoApp.defaultProps = {
    dimaTodos: []
};

const mapStateToProps = createStructuredSelector({
    counters: getCounters(),
    dimaTodos: getDimaTodos()

});


export default connect(mapStateToProps, {...actionCreators, ...actionCreatorsDima})(TodoApp);

