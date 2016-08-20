import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createStructuredSelector } from 'reselect';
import { getCurrentComment } from './selectors'
import * as actions from './actions';

import uniqueId from 'lodash/uniqueId';
import CommentForm from 'components/CommentForm'


export const createNewComment = (author, text) => {
    return {author, text, id: uniqueId()};
};

export const createEmptyComment = () => {
    return {author: '', text: ''};
};

class PostForm extends Component {


    onPostComment = (comment) => {
        const { postComment, changeCurrentComment } = this.props;
        const { author, text } = comment;
        let newComment = createNewComment(author, text);
        fetch('/post', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(newComment)
        })
        .then ( () => {
            postComment(newComment);
            changeCurrentComment(createEmptyComment());
        })
        .catch (error => console.log(error))
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
