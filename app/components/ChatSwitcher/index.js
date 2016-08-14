/**
 * Created by DMedzatiy on 10-Aug-16.
 */

import React, {PropTypes, Component} from 'react';
import ChatSwitcherElement from 'components/ChatSwitcherElement';
import Input from 'components/Input';

export default class ChatSwitcher extends Component {
    constructor(props) {
        super(props);
        this.state = { showAddChatForm: false};
        this.onAddChatClick = this.onAddChatClick.bind(this);

    }


    handleSubmit = (e) => {

        e.preventDefault();
        e.stopPropagation();
        const title = this.inputForTitle.getValue().trim();
        if (this.props.onAddNewChanel(title)) {
            this.setState({showAddChatForm: false});
        } else {
            return ;
        };
    };

    onAddChatClick() {
        this.setState({showAddChatForm:!this.state.showAddChatForm});
    }


    render() {
        const { chatList, onChatSwitch, currentChat } = this.props;

        let chat;
        const chats = Object.keys(chatList).map((chatKey, index) => {
            chat = chatList[chatKey];
            return (
                <ChatSwitcherElement
                    key={index}
                    onChatSwitch={onChatSwitch}
                    chatKey={chatKey}
                    currentChat={currentChat}>
                    {chat.name}
                </ChatSwitcherElement>
            );
        });

        const headerStyle = {
    			backgroundColor: '#4d394b',
    			color: '#fcfcfc',
    			marginBottom: '0px',
          marginTop: '0px',
          height: '10vh'
    		};

        const listStyle = {
          listStyleType: 'none',
          margin: 0,
          padding: 0,
          width: 'strech',
          backgroundColor: '#4d394b',
          height: '70vh'
        };

        const styleSpan = {
            backgroundColor:'#4c9689',
            color:'#f6f5f6',
            borderColor:'#4c9689',
            borderRadius: 0
        };

        const styleAddNewChanel = {
          padding: '8px 16px',
          height: '10vh',
          color: '#fcfcfc'
        }


        const css = {
            transform: this.state.showAddChatForm ? "translate(0%)" : "translate(-100%)",
            transition: "transform 500ms ease-in-out",
            height: '10vh'
        };

        return (
            <div style={{backgroundColor: '#4d394b'}}>
                <h2 className="text-center text-uppercase"
                    style={headerStyle}>
                    Select
                </h2>

                <ul style={listStyle}>
                    {chats}
                </ul>
                <div style={styleAddNewChanel}
                     onClick={this.onAddChatClick}>
                    <span>Add new channel...</span>
                </div>

                <form className="commentForm"
                      onSubmit={this.handleSubmit}
                      style={css}>
                    <div className="input-group">
                        <Input ref={me => this.inputForTitle = me}
                               placeholder="Title of channel"
                               type="text"
                               value={""}
                               className="form-control"
                               validation={true}
                               isValid={this.props.onNewChatNameValidation}
                               borderRadius="0px"/>
                        <span className="input-group-addon" style={styleSpan}>
                          <Input type="submit" value="Add"/>
                        </span>
                    </div>
                </form>
            </div>
        );
    }

}

ChatSwitcher.propTypes = {
    currentChat: PropTypes.object.isRequired,
    chatList: PropTypes.object.isRequired,
    onChatSwitch: PropTypes.func.isRequired,
    onAddNewChanel: PropTypes.func.isRequired,
    onNewChatNameValidation: PropTypes.func.isRequired
};
