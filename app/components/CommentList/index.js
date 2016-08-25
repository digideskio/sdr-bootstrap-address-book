import React, { Component, PropTypes } from 'react';
import Comment from 'components/Comment';

export default class CommentList extends Component {

    componentDidMount() {
        const { getMassegeListAction } = this.props;
        //Get list of messages from server
        getMassegeListAction();
    }

    render() {
        const {onSelectComment, listOfMessages} = this.props;

        const commentNodes = listOfMessages.map((comment, index) => {
            return (
                <Comment
                    author={comment.author}
                    key={index}
                    id={comment.id}
                    date={comment.date}
                    onSelect={onSelectComment}>
                    {comment.text}
                </Comment>
            );
        });

        return (
            <div>
                {commentNodes}
            </div>
        );
    }
}

CommentList.propTypes = {
    listOfMessages: PropTypes.array.isRequired,
    getMassegeListAction: PropTypes.func.isRequired,
    onSelectComment: PropTypes.func,
};
