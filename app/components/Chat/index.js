/**
 * Created by DMedzatiy on 10-Aug-16.
 */

import React from 'react';
import CommentBox from 'components/CommentBox';
import ChatSwitcher from 'components/ChatSwitcher';

const arr = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"},
    {id: 5, author: "Samuel Jackson", text: "Hello another one comment"}
];

const arr2 = [
    {id: 1, author: "Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

const arr3 = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
];

const chats = [
    {
        chatId: 0,
        name: 'chat1',
        messages: arr
    },
    {
        chatId: 1,
        name: 'chat2',
        messages: arr2
    },
    {
        chatId: 2,
        name: 'chat3',
        messages: arr3
    }
];

class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentChat: 0,
            data: chats
        };
        this.onChatSwitch = this.onChatSwitch.bind(this);


    }

    onChatSwitch() {

    }

    render() {
        return (
            <div>
                <h2 style={{textAlign: "center"}}> CHAT </h2>
                <ChatSwitcher />
                <CommentBox data={this.state.data[this.state.currentChat].messages}/>
            </div>
        );
    }
}

export default Chat;