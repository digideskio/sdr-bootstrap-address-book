import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import * as actions from './actions';
import { getListOfMessages } from './selectors';
import CommentList from 'components/CommentList';


const mapDispatchToProps = dispatch => bindActionCreators({...actions}, dispatch);

const mapStateToProps = createStructuredSelector({
    listOfMessages: getListOfMessages()
});

const ChatLoader = connect(mapStateToProps, mapDispatchToProps)(CommentList);

export default ChatLoader;
