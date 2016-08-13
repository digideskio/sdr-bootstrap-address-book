import React, {Component} from 'react';
import Comment from 'components/Comment';

export default class CommentList extends Component {

  render() {
    console.log(JSON.stringify(this.props.data));
    const {onSelectComment, data} = this.props;

    const commentNodes = data.map((comment, index) => {
      return (
        <Comment author={comment.author}
                 key={index}
                 id={comment.id}
                 onSelect={onSelectComment}>
          {comment.text}
        </Comment>
      );
    });

    const styleCommentList = {
      padding: '10px'
    };

    return (
      <div className="CommentList"
           style={styleCommentList}>
        {commentNodes}
      </div>
    );
  }

}
