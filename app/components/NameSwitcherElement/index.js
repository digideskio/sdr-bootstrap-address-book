/**
 * Created by Admin on 23.08.2016.
 */

import React, {Component, PropTypes} from 'react';

export default class NameSwitcherElement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hovered: false
        }
    }

    handleMouseOver = () => {
        this.setState({hovered: true});
    };

    handleMouseOut = () => {
        this.setState({hovered: false});
    };

    render() {
        const hoveredStyle = {
            padding: '8px 16px',
            display: 'block',
            backgroundColor: this.state.hovered ? '#3D303B' : '#4d394b',
            color: '#a494a2'
        };
        const activeStyle = {
            padding: '8px 16px',
            display: 'block',
            backgroundColor: '#4c9689',
            color: '#f6f5f6'
        };
        const {onNickSwitch, nickKey, nicks, currentNick} = this.props;

        return (
            <li style={(nicks == currentNick) ? activeStyle : hoveredStyle}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
                onClick={onNickSwitch}
                data-nick-index={nickKey}>
                    {nicks}
                <button
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={this.props.onDeleteNick}>
                    <span aria-hidden="true" data-index={nickKey}>&times;</span>
                </button>
            </li>
        )
    }
}

NameSwitcherElement.propTypes = {
    nicks: PropTypes.string,                 //Current children
    currentNick: PropTypes.string,           //Current Nickname (active)
    onNickSwitch: PropTypes.func.isRequired,
    onDeleteNick: PropTypes.func.isRequired,
    nickKey: PropTypes.number.isRequired     //Nicknames index
};