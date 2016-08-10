import React, {Component} from 'react';
var Remarkable = require('remarkable');

class Comment extends Component {

  rawMarkup() {

    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup};

  }

  render() {
      const {id, fun, author} = this.props;
    return(
      <div id={id} data-id={id} className="comment" onClick={fun}>
        <h2 className="commentAuthor">
          {author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
}

export default Comment;
