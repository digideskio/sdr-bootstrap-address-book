import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getList } from 'containers/ChatLoader/selectors';
import CommentBox from 'components/CommentBox';
import ChatSwitcher from 'components/ChatSwitcher';
import uniqueId from 'lodash/uniqueId';
import * as actionCreators from './actions';

export const createNewComment = (author, text) => {
    return {author, text, id: uniqueId()};
};

export const createEmptyComment = () => {
    return {author: '', text: ''};
};

class Chat extends Component {

  constructor(props) {
      super(props);
      this.state = {
          currentComment: createEmptyComment()
      };
  }

  onSelectComment = (id) => {
      let currentChat = this.props.messageList;
      let currentComment = currentChat.find(c => c.id == id);
      this.setState({currentComment});
  };

  onSaveUpdateComment = (comment) => {
      let currentChat = this.props.messageList;
      if(comment.id){
          let editCommentIndex = currentChat.findIndex(c => c.id === comment.id);
          if(editCommentIndex >= 0){
              currentChat[editCommentIndex] = Object.assign({}, currentChat[editCommentIndex], comment);
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

            this.props.postComment(newComment);
      }
      this.setState({currentComment: createEmptyComment()});
  };

  render() {
    const chatName = "CHAT";

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


    return(
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
                <CommentBox chatMessages={this.props.messageList}
                            chatName={chatName}
                            onSelectComment={this.onSelectComment}
                            onSaveUpdateComment={this.onSaveUpdateComment}
                            currentComment={this.state.currentComment} />
              </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
    messageList: getList(),
})

export default connect(mapStateToProps, {...actionCreators})(Chat);
