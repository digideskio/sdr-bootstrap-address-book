import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createStructuredSelector } from 'reselect';
import { getCurrentPost } from './selectors';
import { getCurrentNickname } from 'containers/NameSwitcher/selectors';
import * as actions from './actions';

import CommentForm from 'components/CommentForm';


class PostForm extends Component {

    componentWillReceiveProps = (nextProps) => {
        const { changeCurrentPostAction, currentAuthor } = this.props;
        if (nextProps.currentAuthor !== currentAuthor) {
            changeCurrentPostAction(nextProps.currentAuthor, '');
        }
    }

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
    currentAuthor: getCurrentNickname(),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
