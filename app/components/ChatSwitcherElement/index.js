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
  };

  handleMouseOut = () => {
    this.setState({hovered: false});
  };

  render() {
    const hoveredStyle = {
      padding: '8px 16px',
      display: 'block',
      backgroundColor: this.state.hovered ? '#3D303B' : '#4d394b',
      color: '#a494a2'
    };
    const activeStyle = {
      padding: '8px 16px',
      display: 'block',
      backgroundColor: '#4c9689',
      color: '#f6f5f6'
    };
    const {onChatSwitch, chatKey, children, currentChat} = this.props;

    return (
      <li style={(children == currentChat.name) ? activeStyle : hoveredStyle}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          onClick={this.props.onChatSwitch}
          data-chat-name={chatKey}>
          {children}
      </li>
    )
  }
}
