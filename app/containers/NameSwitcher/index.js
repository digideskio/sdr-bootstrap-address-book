/**
 * Created by Admin on 22.08.2016.
 */

import React, { Component, PropTypes } from 'react';
import { Link, Route, Router } from 'react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as actions from './actions.js';
import { getCurrentNickname, getNicknamesList, getCurrentNickIndex } from './selectors';
import { getListOfMessages } from 'containers/ChatLoader/selectors';

import styles from './styles.css';

import ModalWindow from 'components/ModalWindow';
import NameSwitcherElement from 'components/NameSwitcherElement';


class NameSwitcher extends Component {
    constructor(props){
        super(props);
        this.getNewName = this.getNewName.bind(this);
        this.onAddNick = this.onAddNick.bind(this);
        this.onSwitchNick = this.onSwitchNick.bind(this);
        this.onDeleteNick = this.onDeleteNick.bind(this);
    }

    getNewName(nick){
        const indexOfNick = this.props.nicknamesList.indexOf(nick);
        if (indexOfNick >= 0) {
            this.props.changeNick(indexOfNick);
        }
        else {
            this.props.addNickname(nick);
        }
    }

    onAddNick(){
        this.modalAddName.open();
    }

    onSwitchNick(e){
        const index = Number(e.target.dataset.nickIndex);
        this.props.changeNick(index);
    }

    onDeleteNick(e){
        e.preventDefault();
        e.stopPropagation();
        const indexDelNick = Number(e.target.dataset.index);
        this.props.delNickname(indexDelNick);
    }

    render(){
        const { currentNickIndex, nicknamesList, currentNick, messagesList } = this.props;
        const renderList = nicknamesList.map((nick,index)=>{
            return (
                <NameSwitcherElement
                    key={index}
                    nicks={nick}
                    currentNick={currentNick}
                    nickKey={index}
                    onNickSwitch = {this.onSwitchNick}
                    onDeleteNick = {this.onDeleteNick}
                />
            )
        });
        const currentMessages = messagesList.filter((message)=> {if (message.author==currentNick) {return message}});
        const messagesNumber = currentMessages.length > 0 ? currentMessages.length : 0;
        const date = currentMessages[messagesNumber-1]!=undefined ? currentMessages[messagesNumber-1].date : null ;

        const offset = new Date().getTimezoneOffset();
        const dateLocal = new Date(date);
        const dateLoc = new Date(dateLocal.getTime()- offset*60000);

        const lastAtDate =(dateLoc.getMonth() + 1) + "-" + dateLoc.getDate() + "-" + dateLoc.getFullYear();
        const lastAtTime = dateLoc.getHours() + ":" + dateLoc.getMinutes() + ":" + dateLoc.getSeconds();
        const lastAt = lastAtDate+" at "+lastAtTime;

        return (
            <div className={styles.nameSwitchContainer}>

                <div className={styles.switcherHeader}>
                    <h4>Choose Your Nickname</h4>
                </div>
                <ul style={{padding:"10px"}}>
                    {renderList}
                </ul>
                <button
                        style={{width:"100%",
                        color: "#898989",height:"50px"}}
                        onClick={this.onAddNick}>
                    Add new Nickname...
                </button>
                <div style={{textAlign: "center",width:"100%"}}>
                    <Link to={`/nick/${currentNick}/${messagesNumber}/${lastAt}`}>Nickname statistics...</Link>
                </div>
                <ModalWindow
                    isOpen= { nicknamesList.length > 0 ? false : true }
                    headerText = "Welcome to our Chat!"
                    bodyText="Enter your nick-name, and join the chat!"
                    ref={ me => this.modalNewName = me }
                    cancel={ false }
                    getUserName = { this.getNewName }
                />
                <ModalWindow
                    isOpen= { false }
                    headerText = "You can use any quantity of Nicknames!"
                    bodyText="Enter your new nick-name and continue chat!"
                    ref={ me => this.modalAddName = me }
                    cancel={ true }
                    getUserName = { this.getNewName }
                />
            </div>
        )
    }
}

NameSwitcher.propTypes = {
    nicknamesList: PropTypes.array,
    currentNick: PropTypes.string,
    currentNickIndex: PropTypes.number
};

NameSwitcher.defaultProps = {
    nicknamesList: [],
    currentNick: "",
    currentNickIndex: 0
};

const mapDispatchToProps = dispatch => bindActionCreators({...actions}, dispatch);

const mapStateToProps = createStructuredSelector({
    nicknamesList: getNicknamesList(),
    currentNick: getCurrentNickname(),
    currentNickIndex: getCurrentNickIndex(),
    messagesList: getListOfMessages()
});

export default connect(mapStateToProps, mapDispatchToProps)(NameSwitcher);