import React, {Component} from 'react';
import Input from 'components/Input';

export default class CommentForm extends Component {


  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const author = this.inputForAuthor.getValue().trim();
    const text = this.inputForText.getValue().trim();
    if (!text || !author) {
      alarm('Please enter value');
      return;
    }
    const comment = Object.assign({}, this.props.editableComment, {author, text});
    this.props.onSaveUpdate(comment);
  };

  render() {
    const {editableComment} = this.props;
    const styleSpan = {
      backgroundColor:'#4d394b',
      color:'#fcfcfc',
      borderColor:'#4d394b'
    };
    return (
      <form className="commentForm"
            onSubmit={this.handleSubmit} >
        <div className="input-group">
          <Input ref={me => this.inputForAuthor = me}
                 placeholder="Yor name"
                 type="text"
                 value={editableComment.author}
                 className="form-control" />
          <span className="input-group-addon" style={styleSpan}>&</span>
          <Input ref={me => this.inputForText = me}
                 placeholder="Say something..."
                 type="text"
                 value={editableComment.text}
                 className="form-control" />
          <span className="input-group-addon" style={styleSpan}>
            <Input type="submit" value="Post" />
          </span>
        </div>
      </form>
    );
  }

}
