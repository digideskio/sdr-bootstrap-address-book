import React, {Component} from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: '',
      edit: 0
    };

    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.edit['id'] !== 0) {
      this.setState({author: nextProps.edit['author']});
      this.setState({text: nextProps.edit['text']});
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
    this.props.onUpdate(author,text,this.props.edit['id']);
    this.setState({author: '', text: '', edit: {author:'',text:'',edit:0}});
  }

  render() {
      return (
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <input className="form-control"
                type="text"
                placeholder="Your name"
                value={this.state.author}
                onChange={this.handleAuthorChange}
            />
            <input className="form-control"
                type="text"
                placeholder="Say something..."
                value={this.state.text}
                onChange={this.handleTextChange}
            />
            <input className="btn btn-primary" type="submit" value="Post"/>
          </form>
      );
  }

}

export default CommentForm;
