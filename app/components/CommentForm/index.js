import React, {Component} from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: ''
      //editableComment: 0
    };

    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.editableComment['id'] !== 0) {
      this.setState({author: nextProps.editableComment['author']});
      this.setState({text: nextProps.editableComment['text']});
    }
  }

  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onUpdate(author,text,this.props.editableComment['id']);
    this.setState({author: '', text: ''});//, editableComment: {author:'',text:'',editableComment:0}});
  }

  render() {
      return (
          <form className="commentForm" onSubmit={this.handleSubmit} >
            <div className="input-group">
              <input
                  className="form-control"
                  type="text"
                  placeholder="Your name"
                  value={this.state.author}
                  onChange={this.handleAuthorChange}
              />
              <span className="input-group-addon">&</span>
              <input
                  className="form-control"
                  type="text"
                  placeholder="Say something..."
                  value={this.state.text}
                  onChange={this.handleTextChange}
              />
              <span className="input-group-addon">
                <input type="submit" value="Post"/>
              </span>
            </div>
          </form>
      );
  }

}

export default CommentForm;
