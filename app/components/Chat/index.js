/**
 * Created by DMedzatiy on 10-Aug-16.
 */

import React from 'react';
import CommentBox from 'components/CommentBox';
import ChatSwitcher from 'components/ChatSwitcher';
import uniqueId from 'lodash/uniqueId';
//import style from './styles.css'

let chats = {};

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
            currentChat: {},
            currentComment: createEmptyComment()
        };
    }

    componentWillMount() {
        chats = this.props.chats;
        this.setState({currentChat: chats});
    }

    onChatSwitch = (el) => {
        let test = chats[el.currentTarget.dataset.chatName];
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

            fetch('/post',
                {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify(newComment)
                });
            //currentChat.messages.push(newComment);
        }
        this.setState({currentChat, currentComment: createEmptyComment()});
    };

    onSelectComment = (id) => {
        let currentChat = this.state.currentChat;
        let currentComment = currentChat.messages.find(c => c.id == id);
        this.setState({currentComment});
    };

    onAddNewChanel = (channel) =>{
        if (this.onNewChatNameValidation(channel)) {
            chats[channel] = {
                name: channel,
                messages: []
            };
            this.setState({currentChat: chats[channel]});
            return true;
        }
        else {
            return false;
        }
    };

    onNewChatNameValidation(name) {
        return !((name.length == 0) || (Object.keys(chats).map((x) => { return chats[x].name }).indexOf(name) >= 0));
    };

    render() {
      const {currentChat, currentComment} = this.state;

      const styleForContainer = {
        display: 'table',
        width: '100%',
        height: '100%',
        padding: 0,
        boxSizing: 'border-box'
      };

      const styleForRow = {
        height: '100vh',
        display: 'table-row'
      };

      const styleForCol = {
        float: 'none',
        display: 'table-cell',
        padding: 0
      };

      return (
        <div className="container" style={styleForContainer}>
          <div className="row" style={styleForRow}>
              {/* <div className="col-sm-3" style={styleForCol}>
                <ChatSwitcher currentChat={currentChat}
                              chatList={chats}
                              onChatSwitch={this.onChatSwitch}
                              onAddNewChanel={this.onAddNewChanel}
                              onNewChatNameValidation={this.onNewChatNameValidation} />
                </div> */}
                <div className="col-sm-9" style={styleForCol}>
                  <CommentBox chatMessages={currentChat}
                              chatName={currentChat.chatId}
                              onSelectComment={this.onSelectComment}
                              onSaveUpdateComment={this.onSaveUpdateComment}
                              currentComment={currentComment} />
                </div>
            </div>
          </div>

        );
    }

}
