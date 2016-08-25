import React, {Component} from 'react';
var Remarkable = require('remarkable');

export const formatAMPM = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

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
        const {id, author, onSelect, date} = this.props;

        const offset = new Date().getTimezoneOffset();

        let dateLocal = new Date(date);
        let dateLoc = new Date(dateLocal.getTime()- offset*60000).toLocaleString();

        const time = formatAMPM(dateLocal);
        
        const commentStyle = {
            fontStile: '1.5rem',
            lineHeight: '1.5rem'
        };
        const headCommentStyle = {
            fontWeight: 'bold',
            fontSize: '16px'

        };
        const timeStyle = {
            fontSize: '14px',
            color: '#ABABB1',
            marginLeft: '10px'
        }
        const hoverStyle = {
            backgroundColor: this.state.hovered ? '#F8F8F8' : 'white'
        };

        return(
            <div id={id} data-id={id}
                className="comment"
                onClick={onSelect}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
                style={hoverStyle}>
                <span style={headCommentStyle}> {author}</span>
                <span style={timeStyle}>{time}</span>
                {/* <h4 className="commentAuthor" style={headCommentStyle}>
                    {author}
                </h4> */}
                {/* <h5>{dateLoc} wrote: </h5> */}
                <span style={commentStyle}
                    dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
    );
  }

}
