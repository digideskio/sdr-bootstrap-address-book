/**
 * Created by DMedzatiy on 10-Aug-16.
 */

import React from 'react';

export default class ChatSwitcher extends React.Component {
    constructor(props){
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(e) {
        e.preventDefault();
        this.props.onChatSwitch(e.currentTarget.dataset.id);

    }

    render() {
        const {currentChat, chatList, onChatSwitch} = this.props;

        const chats = chatList.map((chat) => {
            if (chat.chatId==currentChat) {
                return (
                    <button className="btn btn-default" key={chat.chatId} disabled="true" >
                        {chat.name}
                    </button>
                )
            }
            else {
                return (
                    <button className="btn btn-default" key={chat.chatId} data-id={chat.chatId} onClick={this.handleOnClick}>
                        {chat.name}
                    </button>
                )
            }
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
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Chose a channel</h3>
                </div>
                <div className="panel-body">
                    <div className="btn-group">
                        {chats}
                    </div>
                </div>
            </div>

        );
    }
    
}


/*<div className="form-group">
    <div>
        <h2 className="text-center text-uppercase"
            style={headerStyle}>
            Select channel
        </h2>
        <select defaultValue={value.name}
                className="form-control"
                onChange={onChatSwitch}
                style={selectStyle}>
            {chats}
        </select>
    </div>
</div>*/