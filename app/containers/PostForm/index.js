import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createStructuredSelector } from 'reselect';
import { getCurrentPost, getPost } from './selectors'
import * as actions from './actions';

import CommentForm from 'components/CommentForm';


class PostForm extends Component {


    onPost = (post) => {
        const { changeCurrentPostAction, sendPostAction } = this.props;
        const { author, text } = post;
        changeCurrentPostAction(author, text);
        sendPostAction();
    }

    render() {
        const { currentPost } = this.props;
        return (
            <CommentForm
                onSaveUpdate={this.onPost}
                editableComment={currentPost}
            />
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({...actions}, dispatch);

const mapStateToProps = createStructuredSelector({
    currentPost: getCurrentPost(),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
