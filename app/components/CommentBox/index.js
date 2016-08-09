import React, {Component} from 'react';
import CommentList from 'components/CommentList';
import CommentForm from 'components/CommentForm';

const arr = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"},
  {id: 5, author: "Samuel Jeckson", text: "Hello another one comment"}
];

function nextIndex() {

    let id;
    if (!arr.length) {return 0; }
    else { const id_arr = arr.map((x) => {return x.id});
      id = Math.max(...id_arr) }
    return id+1;
  }

class CommentBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: arr,
      id_n: nextIndex()
    };
    this.onAddComment = this.onAddComment.bind(this);
  }

  onAddComment(author,text) {

    const newComment = { id: this.state.id_n,
                          author: author,
                          text: text};
    const newData = this.state.data.concat(newComment);
    this.setState({data: newData,
                    id_n: this.state.id_n+1});

  }

  render() {
    return (
      <div className="CommentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onUpdate={this.onAddComment} />

      </div>
    );
  }

}

export default CommentBox;
