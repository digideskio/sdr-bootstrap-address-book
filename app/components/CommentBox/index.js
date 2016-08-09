import React, {Component} from 'react';
import CommentList from 'components/CommentList';
import CommentForm from 'components/CommentForm';

var arr = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

class CommentBox extends Component {


  constructor(props) {
    super(props);
    this.state = {
                    data: arr,
                    id_n: 3
                 };
    this.onNewComment = this.onNewComment.bind(this);
   }

   onNewComment(author,text) {

     const newComment = { id: this.state.id_n,
                           author: author,
                           text: text};
     const newData = this.state.data.concat(newComment);
     this.setState({data: newData,
                     id_n: this.state.id_n+1});
     }

  render() {
    return (
      <div className="CommentBox col-md-6 col-md-offset-3">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm ref="comment" onUpdate-{this.onNewComment} />
      </div>
    );
  }

}

export default CommentBox;
