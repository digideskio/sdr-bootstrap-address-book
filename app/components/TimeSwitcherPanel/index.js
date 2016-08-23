import React, { Component, PropTypes } from 'react';

const FREQUENCY = [1000, 5000, 30000];

const TimeSwitcherPanel = ({onClick, selectedTime}) => {
    const timelist = FREQUENCY.map((time, index) => {
        return (
            <li onClick={onClick}
                key={index}
                value={time}>
                {`${time/1000}sec`}
            </li>
        );
    });

    return (
        <ul className="list-inline">
            <li>Time Update:</li>
            {timelist}
            <li>Update now</li>
        </ul>
    );
}

TimeSwitcherPanel.propTypes = {
    onClick: PropTypes.func.isRequired,
    selectedTime: PropTypes.number
}

export default TimeSwitcherPanel;
