import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { getCurrentPost } from './selectors';
import { getCurrentNickname } from 'containers/NameSwitcher/selectors';
import * as actions from './actions';
import CommentForm from 'components/CommentForm';


const mapDispatchToProps = dispatch => bindActionCreators({...actions}, dispatch);

const mapStateToProps = createStructuredSelector({
    currentPost: getCurrentPost(),
    currentAuthor: getCurrentNickname(),
});

const PostForm =  connect(mapStateToProps, mapDispatchToProps)(CommentForm);

export default PostForm;
