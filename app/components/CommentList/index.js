import React, { Component, PropTypes } from 'react';
import Comment from 'components/Comment';

export default class CommentList extends Component {

    componentDidMount() {
        const { getMassegeListAction } = this.props;
        //start fetching
        getMassegeListAction();

    }

    componentWillUnmount() {
        const { stopFetchingAction } = this.props;
        //Stop fetching, isFetching to false
        stopFetchingAction();
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
    stopFetchingAction: PropTypes.func.isRequired,
    getMassegeListAction: PropTypes.func.isRequired,
    onSelectComment: PropTypes.func,
};
