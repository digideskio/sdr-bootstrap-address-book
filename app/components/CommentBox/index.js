import React, {Component} from 'react';
import CommentList from 'components/CommentList';
import CommentForm from 'components/CommentForm';

let arr = [
  {id: 1, author: 'Pete Hunt', text: 'This is one comment'},
  {id: 5, author: 'Jordan Walke', text: 'This is *another* comment'}
];

export default class CommentBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: arr,
      editableComment: {author:'', text:'', id:0},
      id_n: arr[arr.length-1].id + 1
    };
  }

  onAddorUpdateComment = (author,text, id) => {
    if (id == 0) {
      const newComment = {
        id: this.state.id_n,
        author: author,
        text: text
      };

      let comments = Object.assign({}, this.state);

      comments.data.push(newComment);
      const newData = comments.data;

      this.setState({
        data: newData,
        editableComment: {author: '', text: '', id: 0},
        id_n: this.state.id_n + 1
      });

    } else {
      const newData = this.state.data.map((comment) => {
        if (comment.id == id) {
          comment.author = author;
          comment.text = text;
        }
        return comment;
      });

      this.setState({
        data: newData,
        editableComment: {author: '', text: '', id: 0}
      });
    }
  }

  onGetEditableComment = (el) => {
    const id = el.currentTarget.dataset.id;
    let editableComment;
    if (id) {
      editableComment = this.state.data.find((comment) => {
        return comment.id == id;
      });
    } else {
      editableComment = {author:'', text:'', id:0};
    }
    this.setState({editableComment: editableComment});
  }

  render() {
    const chatBoxStyle = {
      height: 400,
      overflow: 'auto',
      border: '1px solid #ccc',
      marginBottom: '20px'
    };
    const headerStyle = {
      backgroundColor:'#4d394b',
      color:'#fcfcfc',
      marginBottom:'0px'
    };
    const {data, editableComment} = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <h1 className="text-center" style={headerStyle}>
              CHAT
            </h1>
            <div style={chatBoxStyle} className="pre-scrollable">
              <CommentList onGetEditableComment={this.onGetEditableComment} data={data} />
            </div>
            <CommentForm onUpdate={this.onAddorUpdateComment} data={data} editableComment={editableComment} />
          </div>
        </div>
      </div>
    );
  }

}
