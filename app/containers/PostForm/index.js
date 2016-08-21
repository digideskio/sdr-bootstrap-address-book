import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createStructuredSelector } from 'reselect';
import { getCurrentComment } from './selectors'
import * as actions from './actions';

import CommentForm from 'components/CommentForm';


export const createNewComment = (author, text) => {
    return {author, text};
};

export const createEmptyComment = () => {
    return {author: '', text: ''};
};

class PostForm extends Component {


    onPostComment = (comment) => {
        const { changeCurrentComment } = this.props;
        const { author, text } = comment;
        let newComment = createNewComment(author, text);
        this.props.sendPost(newComment);
    }

    render() {
        const { currentComment } = this.props;
        return (
            <CommentForm
                onSaveUpdate={this.onPostComment}
                editableComment={currentComment}
            />
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({...actions}, dispatch);

const mapStateToProps = createStructuredSelector({
    currentComment: getCurrentComment(),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
