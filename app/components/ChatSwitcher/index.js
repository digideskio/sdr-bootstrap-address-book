/**
 * Created by DMedzatiy on 10-Aug-16.
 */

import React, {PropTypes, Component} from 'react';

export default class ChatSwitcher extends Component {

    render() {
        const {currentChat, chatList, onChatSwitch} = this.props;
        let chat;
        const chats = Object.keys(chatList).map((chatKey, index) => {
            chat = chatList[chatKey];
            return (
                <option key={index} value={chatKey}>
                    {chat.name}
                </option>
            );
        });

        const headerStyle = {
          backgroundColor:'#4d394b',
          color:'#fcfcfc',
          marginBottom:'0px'
        };
        const selectStyle = {
          borderRadius: '0px'
        };
        return (
            <div className="form-group">
                <div>
                    <h2 className="text-center text-uppercase"
                        style={headerStyle}>
                      Select channel
                    </h2>
                    <select value={currentChat.name}
                            className="form-control"
                            onChange={onChatSwitch}
                            style={selectStyle}>
                        {chats}
                    </select>
                </div>
            </div>
        );
    }

}

ChatSwitcher.propTypes = {
    currentChat: PropTypes.object.isRequired,
    chatList: PropTypes.object.isRequired,
    onChatSwitch: PropTypes.func.isRequired
};