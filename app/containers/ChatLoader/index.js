import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import * as actions from './actions';
import { getListOfMessages } from './selectors';
import CommentList from 'components/CommentList';


class ChatLoader extends Component {

    componentDidMount() {
        const { getMassegeListAction } = this.props;
        //start fetching
        getMassegeListAction();
    }

    compnentWillUnmount() {
        const { stopFetchingAction } = this.props;
        //Stop fetching, isFetching to false
        stopFetchingAction();
    }

    render() {
        const { listOfMessages } = this.props;
        return (
            <CommentList listOfMessages={listOfMessages} />
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({...actions}, dispatch);

const mapStateToProps = createStructuredSelector({
    listOfMessages: getListOfMessages()
});

ChatLoader.propTypes = {
    stopFetchingAction: PropTypes.func.isRequired,
    getMassegeListAction: PropTypes.func.isRequired,
    listOfMessages: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatLoader);
