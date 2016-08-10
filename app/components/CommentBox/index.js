import React, {Component} from 'react';
import CommentList from 'components/CommentList';
import CommentForm from 'components/CommentForm';

<<<<<<< HEAD
const arr = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"},
  {id: 3, author: "Samuel Jackson", text: "Hello another one comment"}
];

function nextIndex(arr) {
    let id;
    if (!arr.length) {
        return 0;
    } else {
        const id_arr = arr.map((x) => {
            return x.id
        });
        id = Math.max(...id_arr)
    }
    return id + 1;
}

class CommentBox extends Component {
=======
let arr = [
  {id: 1, author: 'Pete Hunt', text: 'This is one comment'},
  {id: 5, author: 'Jordan Walke', text: 'This is *another* comment'}
];

export default class CommentBox extends Component {
>>>>>>> 7dca4cf163b9052de278bc838a5a44ec5bfdcfb2

  constructor(props) {
    super(props);

    this.state = {
      data: arr,
<<<<<<< HEAD
      edit: {'author':'','text':'','id':0},
      id_n: nextIndex(arr)
    };
    this.onAddComment = this.onAddComment.bind(this);
    this.onUpdateComment = this.onUpdateComment.bind(this);
  }


  onAddComment(author,text, id) {
      if (id == 0) {
          const newComment = {
              id: this.state.id_n,
              author: author,
              text: text
          };
          const newData = this.state.data.concat(newComment);
          this.setState({
              data: newData,
              edit: {'author': '', 'text': '', 'id': 0},
              id_n: this.state.id_n + 1
          });
      }
      else
      {
          var newData = this.state.data;
          newData[id-1]['author'] = author;
          newData[id-1]['text'] = text;
          this.setState({
              data: newData,
              edit: {'author': '', 'text': '', 'id': 0}
          });
      }
  }


  onUpdateComment(el)
  {
	  const id = el.currentTarget.dataset.id;
      var mas;
      if (id)
      {
          mas = this.state.data[id-1];
      }
      else
      {
          mas = {'author':'','text':'','id':0};
      }
      this.setState({edit: mas});
=======
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
>>>>>>> 7dca4cf163b9052de278bc838a5a44ec5bfdcfb2
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
<<<<<<< HEAD
      <div className="CommentBox">
        <h1>Comments</h1>
        <CommentList onUpdateComment={this.onUpdateComment} data={this.state.data} />
        <CommentForm onUpdate={this.onAddComment} data={this.state.data} edit={this.state.edit} />


=======
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
>>>>>>> 7dca4cf163b9052de278bc838a5a44ec5bfdcfb2
      </div>
    );
  }

}
