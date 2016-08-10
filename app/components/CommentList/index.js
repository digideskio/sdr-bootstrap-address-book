import React, {Component} from 'react';
import Comment from 'components/Comment';

export default class CommentList extends Component {

  render() {
    let onGetEditable = this.props.onGetEditableComment;

    const commentNodes = this.props.data.map((comment) => {
      return (
        <Comment author={comment.author} key={comment.id} id={comment.id}
                 onGetEditable={onGetEditable}>
          {comment.text}
        </Comment>
      );
    });

    const styleCommentList = {
      padding: '10px'
    }
    return (
      <div className="CommentList" style={styleCommentList}>
        {commentNodes}
      </div>
    );
  }

}
