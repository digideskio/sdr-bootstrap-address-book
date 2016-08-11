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

    onChatSwitch = (newChatId) => {

        const newData = this.refs.CommentBox.state.data;

        this.setState({
            currentChat: newChatId,
            data: this.state.data.map((x)=> {
                        if (x.chatId == this.state.currentChat) {
                            return {chatId: x.chatId, name: x.name, messages: newData}
                        }
                        else {
                            return x
                        }
                    }
            )
        });
    }

    render() {
      const {currentChat, data} = this.state;
      return (
        <div className="container">
          <div className="row">

              <div className="col-lg-12">
                <ChatSwitcher currentChat={currentChat}
                              chatList={data.map((chat) => {
                                          return {chatId: chat.chatId, name: chat.name}
                                        })}
                              onChatSwitch={this.onChatSwitch}
                />
                </div>
                <div className="col-lg-12">
                  <CommentBox chatMessages={data[currentChat].messages}
                              chatName={data[currentChat].name}
                              ref="CommentBox"
                  />
                </div>
          </div>
          </div>
        );
    }

}
