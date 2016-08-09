import React, {Component} from 'react';
var Remarkable = require('remarkable');

class Comment extends Component {

  rawMarkup() {

    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup};

  }

  render() {
    return(
      <div className="Comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
}

export default Comment;
