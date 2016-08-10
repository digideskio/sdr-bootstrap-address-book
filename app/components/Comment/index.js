import React, {Component} from 'react';
var Remarkable = require('remarkable');

class Comment extends Component {

  rawMarkup() {

    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup};

  }

  //get comment id for editable Comment
  handleOnClick = () => {
    this.props.fun(this.props.id);
  }

  render() {
    var commentStyle = {
      fontStile: '1.5rem',
      lineHeight: '1.5rem'
    }

    return(
      <div id={this.props.id} className="comment"  onClick={this.handleOnClick}>
        <h4 className="commentAuthor" style={{'fontWeight':'bold'}}>
          {this.props.author}
        </h4>
        <span style={commentStyle}
              dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
}

export default Comment;
