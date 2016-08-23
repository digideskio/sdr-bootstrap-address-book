/**
 * Created by Admin on 22.08.2016.
 */

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import * as actions from './actions.js';
import { createStructuredSelector } from 'reselect';
import { getCurrentNickname, getNicknamesList } from './selectors';
import { connect } from 'react-redux';

import ModalWindow from 'components/ModalWindow';
import NameSwitcherElement from 'components/NameSwitcherElement';

class NameSwitcher extends Component {
    constructor(props){
        super(props);
        this.getNewName = this.getNewName.bind(this);
        this.onAddNick = this.onAddNick.bind(this);
        this.onSwitchNick = this.onSwitchNick.bind(this);
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

    render(){

        const renderList = this.props.nicknamesList.map((nick,index)=>{
            return (
                <NameSwitcherElement
                    key={index}
                    nicks={nick}
                    currentNick={this.props.currentNick}
                    nickKey={index}
                    onNickSwitch = { this.onSwitchNick }
                />
            )
        });


        return (
            <div>
                <ul>
                    {renderList}
                </ul>
                <button className="btn btn-primary"
                        onClick={this.onAddNick}>
                    Add new Nickname
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

/*function mapDispatchToProps(dispatch) {
    return {
        onNewNickname: (evt) => dispatch(changeUsername(evt.target.value)),
        changeRoute: (url) => dispatch(push(url)),
        onSubmitForm: (evt) => {
            if (evt !== undefined && evt.preventDefault) evt.preventDefault();
            dispatch(loadRepos());
        },

        dispatch,
    };
}*/

const mapStateToProps = createStructuredSelector({
    nicknamesList: getNicknamesList(),
    currentNick: getCurrentNickname()
});

export default connect(mapStateToProps, mapDispatchToProps)(NameSwitcher);