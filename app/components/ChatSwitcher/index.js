/**
 * Created by DMedzatiy on 10-Aug-16.
 */

import React from 'react';

class ChatSwitcher extends React.Component {

    render() {
        const {currentChat, chatList, onChatSwitch} = this.props;
        const chats = chatList.map((chat) => {
            return (
                <option key={chat.chatId}>{chat.name}
                </option>
            );
        });

        const value = chatList.find((chat) => {
            if (currentChat == chat.chatId)
            {
                return chat.name;
            }
        });

        return (
            <div className="form-group">
                <div>
                    <h3>I am a Switcher :) </h3>
                    <select defaultValue={value.name} className="form-control" onChange={onChatSwitch}>
                        {chats}
                    </select>
                </div>
            </div>
        );
    }
}

export default ChatSwitcher;