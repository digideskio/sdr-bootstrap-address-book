/**
 * Created by DMedzatiy on 10-Aug-16.
 */

import React, {PropTypes, Component} from 'react';
import ChatSwitcherElement from 'components/ChatSwitcherElement';

export default class ChatSwitcher extends Component {

    render() {
        const {currentChat, chatList, onChatSwitch} = this.props;

        let chat;
        const chats = Object.keys(chatList).map((chatKey, index) => {
            chat = chatList[chatKey];
            return (
                <ChatSwitcherElement
                    key={index}
                    onChatSwitch={onChatSwitch}
                    chatKey={chatKey}>
                    {chat.name}
                </ChatSwitcherElement>
            );
        });

        const headerStyle = {
    			backgroundColor: '#4d394b',
    			color: '#fcfcfc',
    			marginBottom: '0px',
          marginTop: '0px'
    		};
        const listStyle = {
          listStyleType: 'none',
          margin: 0,
          padding: 0,
          width: 'strech',
          backgroundColor: '#f1f1f1'
        };
        return (
          <div>
            <h2 className="text-center text-uppercase"
                style={headerStyle}>
                Select channel
            </h2>
            <ul style={listStyle}>
              {chats}
            </ul>
          </div>
        );
    }

}

ChatSwitcher.propTypes = {
    currentChat: PropTypes.object.isRequired,
    chatList: PropTypes.object.isRequired,
    onChatSwitch: PropTypes.func.isRequired
};
