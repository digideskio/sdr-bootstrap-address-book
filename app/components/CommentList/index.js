import React, {Component} from 'react';
import Comment from 'components/Comment';

class CommentList extends Component {

  render() {

    var func = this.props.onUpdateComment;
    var commentNodes = this.props.data.map(function(comment){
      return (
        <Comment author={comment.author} key={comment.id} id={comment.id}
                 fun={func}>
          {comment.text}
        </Comment>
      );
    });
    var styleCommentList = {
      'marginLeft': '10px'
    }
    return (
      <div className="CommentList" style={styleCommentList}>
        {commentNodes}
      </div>
    );
  }

}

export default CommentList;
