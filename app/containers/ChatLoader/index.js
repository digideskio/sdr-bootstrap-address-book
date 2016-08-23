/**
 * Created by Olexiy Lyhun on 18.08.2016.
 */


import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import { createStructuredSelector } from 'reselect';
import { getListOfMessages } from './selectors';
import CommentList from '../../components/CommentList';

const TIME_OF_UDPATE = 1000;

class ChatLoader extends Component {

    componentDidMount() {
        const { getMassegeListAction } = this.props;
        getMassegeListAction(TIME_OF_UDPATE);
    }

    render() {
        const { listOfMessages } = this.props;
        return (
            <CommentList listOfMessages={listOfMessages} />
        )
    }
}

const mapStateToProps = createStructuredSelector({
    listOfMessages: getListOfMessages(),
})

export default connect(mapStateToProps, {...actionCreators})(ChatLoader);
