import React, {Component} from 'react';
import CommentList from 'components/CommentList';
import CommentForm from 'components/CommentForm';

var arr = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 5, author: "Jordan Walke", text: "This is *another* comment"}
];

class CommentBox extends Component {


  constructor(props) {
    super(props);
    this.state = {
      data: arr,
      editableCommetn: {author:'', text:'', id:0},
      id_n: arr[arr.length-1].id + 1
    };
    this.onNewComment = this.onNewComment.bind(this);
    //this.onUpdateComment = this.onUpdateComment.bind(this);
  }

  onNewComment(author,text, id) {
    if (id == 0) {
      const newComment = {
        id: this.state.id_n,
        author: author,
        text: text
      };

      const newData = this.state.data.concat(newComment);

      this.setState({
        data: newData,
        editableCommetn: {author: '', text: '', id: 0},
        id_n: this.state.id_n + 1
      });

    } else {
      var newData = this.state.data.map(function(comment){
        if (comment.id == id) {
          comment.author = author;
          comment.text = text;
        }
        return comment;
      });
          // newData[id-1]['author'] = author;
          // newData[id-1]['text'] = text;
      this.setState({
        data: newData,
        editableCommetn: {author: '', text: '', id: 0}
      });
    }
  }

  onUpdateComment = (id) => {
    var id = id; // el._targetInst._hostParent._hostNode.id - What is it?? Google no response
    var editableComment;
    if (id) {
      editableComment = this.state.data.find(function(comment){
        return comment.id == id;
      }); //this.state.data[id-1];
    } else {
      editableComment = {author:'', text:'', id:0};
    }
    this.setState({editableCommetn: editableComment});
  }

  render() {
    var chatBoxStyle = {
      height: 400,
      overflow: 'auto',
      border: '1px solid #ccc',
      'marginBottom': '20px'
    };
    var headerStyle = {
      'backgroundColor':'#4d394b',
      'color':'#fcfcfc',
      'marginBottom':'0px'
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <h1 className="text-center" style={headerStyle}>
              CHAT
            </h1>
            <div style={chatBoxStyle} className="pre-scrollable">
              <CommentList onUpdateComment={this.onUpdateComment} data={this.state.data} />
            </div>
            <CommentForm onUpdate={this.onNewComment} data={this.state.data} editableComment={this.state.editableCommetn} />
          </div>
        </div>
      </div>
    );
  }

}

export default CommentBox;
