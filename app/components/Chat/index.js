/**
 * Created by DMedzatiy on 10-Aug-16.
 */

import React from 'react';
import CommentBox from 'components/CommentBox';
import ChatSwitcher from 'components/ChatSwitcher';
import uniqueId from 'lodash/uniqueId';

const arr = [
    {id: uniqueId(), author: "Pete Hunt", text: "This is one comment"},
    {id: uniqueId(), author: "Jordan Walke", text: "This is *another* comment"},
    {id: uniqueId(), author: "Samuel Jackson", text: "Hello another one comment"}
];

const arr2 = [
    {id: uniqueId(), author: "Hunt", text: "This is one comment"},
    {id: uniqueId(), author: "Jordan Walke", text: "This is *another* comment"}
];

const arr3 = [
    {id: uniqueId(), author: "Pete Hunt", text: "This is one comment"},
];

const chats = {
    chat1: {
        name: 'Chat #1',
        messages: arr
    },
    chat2: {
        name: 'Chat #2',
        messages: arr2
    },
    chat3: {
        name: 'Chat #3',
        messages: arr3
    }
};

export const createNewComment = (author, text) => {
    return {author, text, id: uniqueId()};
};

export const createEmptyComment = () => {
    return {author: '', text: ''};
};

export default class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentChat: chats.chat1,
            currentComment: createEmptyComment()
        };
    }

    onChatSwitch = (el) => {
        let test = chats[el.currentTarget.dataset.chatName];
        console.log(test);
        this.setState({currentChat: chats[el.currentTarget.dataset.chatName], currentComment: createEmptyComment()});
    };

    onSaveUpdateComment = (comment) => {
        let currentChat = Object.assign({}, this.state.currentChat);
        if(comment.id){
            let editCommentIndex = currentChat.messages.findIndex(c => c.id === comment.id);
            if(editCommentIndex >= 0){
                currentChat.messages[editCommentIndex] = Object.assign({}, currentChat.messages[editCommentIndex], comment);
            }
        } else {
            let newComment = createNewComment(comment.author, comment.text);
            currentChat.messages.push(newComment);
        }
        this.setState({currentChat, currentComment: createEmptyComment()});
    };

    onSelectComment = (id) => {
        let currentChat = this.state.currentChat;
        let currentComment = currentChat.messages.find(c => c.id == id);
        this.setState({currentComment});
    };

    render() {
      const {currentChat, currentComment} = this.state;
      return (

          <div className="row-fluid">
              <div className="col-sm-3" style={{padding:0}}>
                <ChatSwitcher currentChat={currentChat}
                              chatList={chats}
                              onChatSwitch={this.onChatSwitch} />
                </div>
                <div className="col-sm-8" style={{padding:0}}>
                  <CommentBox chatMessages={currentChat.messages}
                              chatName={currentChat.name}
                              onSelectComment={this.onSelectComment}
                              onSaveUpdateComment={this.onSaveUpdateComment}
                              currentComment={currentComment} />
                </div>
            </div>

        );
    }

}
