/**
 * Created by DMedzatiy on 10-Aug-16.
 */

import React from 'react';

export default class ChatSwitcher extends React.Component {

    render() {
        const {currentChat, chatList, onChatSwitch} = this.props;

        const chats = chatList.map((chat) => {
            return (
                <option key={chat.chatId}>
                  {chat.name}
                </option>
            );
        });

        const value = chatList.find((chat) => {
            if (currentChat == chat.chatId) {
                return chat.name;
            }
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
                      Select chanel
                    </h2>
                    <select defaultValue={value.name}
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
