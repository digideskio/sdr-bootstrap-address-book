import React, {Component} from 'react';

export default class CommentForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.editableComment.id !== 0) {
      this.setState({author: nextProps.editableComment.author,
                     text: nextProps.editableComment.text});
    }
  }

  handleAuthorChange = (e) => {
    this.setState({author: e.target.value});
  }

  handleTextChange = (e) => {
    this.setState({text: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const author = this.state.author.trim();
    const text = this.state.text.trim();
    if (!text || !author) {
      return;
    }

    this.props.onUpdate(author, text, this.props.editableComment.id);
    this.setState({author: '', text: ''});
  }

  render() {
    const styleSpan = {
      backgroundColor:'#4d394b',
      color:'#fcfcfc',
      borderColor:'#4d394b'
    }
    const {author, text} = this.state;
    return (
      <form className="commentForm" onSubmit={this.handleSubmit} >
        <div className="input-group">
          <input
              className="form-control"
              type="text"
              placeholder="Your name"
              value={author}
              onChange={this.handleAuthorChange}
          />
          <span className="input-group-addon" style={styleSpan}>&</span>
          <input
              className="form-control"
              type="text"
              placeholder="Say something..."
              value={text}
              onChange={this.handleTextChange}
          />
          <span className="input-group-addon" style={styleSpan}>
            <input type="submit" value="Post"/>
          </span>
        </div>
      </form>
    );
  }

}
