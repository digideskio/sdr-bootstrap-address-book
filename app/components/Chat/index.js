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

export default class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentChat: 0,
            data: chats
        };
    }

    onChatSwitch = (el) => {
        const element = this.state.data.find((chat) => {
                return (chat.name == el.target.value);
            }
        );
        chats[this.state.currentChat].messages = this.refs['commentBox'].getUpdatedData();
        //console.log(this.state.data[this.state.currentChat].messages)
        this.setState({
          data: chats,
          currentChat: element.chatId
        });
        //console.log(this.state.currentChat);
    }

    render() {
      const {currentChat, data} = this.state;
      return (
        <div className="container">
          <div className="row">
              <div className="col-sm-3">
                <ChatSwitcher currentChat={currentChat}
                              chatList={data.map((chat) => {
                                          return {chatId: chat.chatId, name: chat.name}
                                        })}
                              onChatSwitch={this.onChatSwitch}
                />
                </div>
                <div className="col-sm-9">
                  <CommentBox chatMessages={data[currentChat].messages}
                              chatName={data[currentChat].name}
                              ref="commentBox"
                              onPostOrEditMessage={this.onPostOrEditMessage}
                  />
                </div>
            </div>
          </div>
        );
    }

}
