import React, {Component} from 'react';
import Comment from 'components/Comment';

class CommentList extends Component {

  render() {

    var commentNodes = this.props.data.map(function(comment){
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });

    return (
      <div className="CommentList">
        {commentNodes}
      </div>
    );
  }
  
}

export default CommentList;
