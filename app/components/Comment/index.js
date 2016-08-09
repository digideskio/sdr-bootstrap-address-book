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
      <div id={this.props.id} className="comment"  onClick={this.props.fun} >
        <h3 className="commentAuthor">
          {this.props.author}
        </h3>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
          <hr/>
      </div>
    );
  }
}

export default Comment;
