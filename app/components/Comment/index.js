import React, {Component} from 'react';
var Remarkable = require('remarkable');

export default class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hovered: false
        }
    }

    rawMarkup() {
        let md = new Remarkable();
        let rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup};
    }

    handleMouseOver = () => {
        this.setState({hovered: true});
    }

    handleMouseOut = () => {
        this.setState({hovered: false});
    }

    render() {
        const {id, author, onSelect,date} = this.props;

        const offset = new Date().getTimezoneOffset();

        let dateLocal = new Date(date);
        let dateLoc = new Date(dateLocal.getTime()- offset*60000).toLocaleString();

        const commentStyle = {
            fontStile: '1.5rem',
            lineHeight: '1.5rem'
        };
        const headCommentStyle = {
            fontWeight: 'bold'
        };
        const hoverStyle = {
            backgroundColor: this.state.hovered ? '#E8E8E8' : 'white'
        };

        return(
            <div id={id} data-id={id}
                className="comment"
                onClick={onSelect}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
                style={hoverStyle}>
                <h4 className="commentAuthor" style={headCommentStyle}>
                    {author}
                </h4>
                <h5>{dateLoc} wrote: </h5>
                <span style={commentStyle}
                    dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
    );
  }

}
