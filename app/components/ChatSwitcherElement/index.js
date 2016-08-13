import React, {Component} from 'react';

export default class ChatSwitcherElement extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    }
  }

  handleMouseOver = () => {
    this.setState({hovered: true});
  }

  handleMouseOut = () => {
    this.setState({hovered: false});
  }

  render() {

    const listItemeStyle = {
      display: 'block',
      color: '#000',
      padding: '8px 16px',
      backgroundColor: (this.state.hovered) ? '#ecf0f1' : 'white'

    };

    return (
      <li style={listItemeStyle}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          onClick={this.props.onChatSwitch}
          data-chat-name={this.props.chatKey}>
          {this.props.children}
      </li>
    )
  }
}
