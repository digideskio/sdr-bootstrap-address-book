import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { getCurrentPost } from './selectors';
import { getCurrentNickname } from 'containers/NameSwitcher/selectors';
import * as actions from './actions';
import CommentForm from 'components/CommentForm';


class PostForm extends Component {

    //Change currentAuthor
    componentWillReceiveProps(nextProps) {
        const { changeCurrentPostAction, currentAuthor } = this.props;
        if (nextProps.currentAuthor !== currentAuthor) {
            changeCurrentPostAction(nextProps.currentAuthor, '');
        }
    }

    onSendPost = (author, text) => {
        const {changeCurrentPostAction, sendPostAction, currentAuthor, currentPost } = this.props;
        //Change currentPost before send post action
        changeCurrentPostAction(author, text);
        //Send post to server
        sendPostAction(currentAuthor);
    }

    render() {
        const { currentPost } = this.props;
        return (
            <CommentForm currentPost={currentPost} onSendPost={this.onSendPost} />
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({...actions}, dispatch);

const mapStateToProps = createStructuredSelector({
    currentPost: getCurrentPost(),
    currentAuthor: getCurrentNickname(),
});

PostForm.propTypes = {
    changeCurrentPostAction: PropTypes.func.isRequired,
    sendPostAction: PropTypes.func.isRequired,
    currentPost: PropTypes.object.isRequired,
    currentAuthor: PropTypes.string.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
