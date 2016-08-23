/**
 * Created by Admin on 22.08.2016.
 */

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import * as actions from './actions.js';
import { createStructuredSelector } from 'reselect';
import { getCurrentNickname, getNicknamesList } from './selectors';
import { connect } from 'react-redux';
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

        const renderList = this.props.nicknamesList.map((nick,index)=>{
            return (
                <NameSwitcherElement
                    key={index}
                    nicks={nick}
                    currentNick={this.props.currentNick}
                    nickKey={index}
                    onNickSwitch = {this.onSwitchNick}
                    onDeleteNick = {this.onDeleteNick}
                />
            )
        });


        return (
            <div className="container-fluid"
                style={{border:"solid white 2px",
                        paddingLeft:"0px",
                        paddingRight:"0px",
                        height:"90vh"}}>
                <div className={styles["switcherHeader"]}>
                    <h4>Choose Your Nickname</h4>
                </div>
                <ul style={{padding:"10px"}}>
                    {renderList}
                </ul>
                <button
                        style={{width:"100%", color: "#898989",height:"50px"}}

                        onClick={this.onAddNick}>
                    Add new Nickname...
                </button>
                <ModalWindow
                    isOpen= { true }
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
    currentNick: PropTypes.string
};

NameSwitcher.defaultProps = {
    nicknamesList: [],
    currentNick: ""
};

const mapDispatchToProps = dispatch => bindActionCreators({...actions}, dispatch);

const mapStateToProps = createStructuredSelector({
    nicknamesList: getNicknamesList(),
    currentNick: getCurrentNickname()
});

export default connect(mapStateToProps, mapDispatchToProps)(NameSwitcher);