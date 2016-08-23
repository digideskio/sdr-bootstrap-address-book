import React, { Component, PropTypes } from 'react';

const FREQUENCY = [1000, 5000, 30000];

const TimeSwitcherPanel = ({onClick, selectedTime, onUpdate}) => {
    const selectedStyle = {border:"solid white 1px"};
    const unselectedStyle = {border: "0px"};
    const timelist = FREQUENCY.map((time, index) => {
        return (
            <li onClick={onClick}
                style={FREQUENCY[index]==selectedTime ? selectedStyle : unselectedStyle}
                key={index}
                value={time}>
                {`${time/1000}sec`}
            </li>
        );
    });

    return (
        <div>
            <ul className="list-inline">
                <li>Time Update:</li>
                {timelist}
                <li>Time to next Update: </li>
                <li style={selectedStyle}>0 s</li>
            </ul>

        </div>
    );
};

TimeSwitcherPanel.propTypes = {
    onClick: PropTypes.func.isRequired,
    selectedTime: PropTypes.number
};

export default TimeSwitcherPanel;
