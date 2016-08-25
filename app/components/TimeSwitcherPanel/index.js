import React, { Component, PropTypes } from 'react';
import Timer from 'components/Timer';

const FREQUENCY = [1000, 5000, 30000];

class TimeSwitcherPanel extends Component {

    componentDidMount = () => {
        const { incrementSecondsAction } = this.props;
        setInterval(incrementSecondsAction, 1000);
    }

    onClick = (e) => {
        e.preventDefault();
        const { changeTimeOfUpdateAction } = this.props;
        changeTimeOfUpdateAction(e.target.value);
    }

    render() {
        const {onClick, selectedTime, totalSeconds} = this.props;
        const selectedStyle = {
            border:"solid #347bb7 1px",
            color: selectedTime/1000 === totalSeconds ? 'black' : '#347bb7'
        };
        const unselectedStyle = {border: "0px"};
        const timeStyle = {
            backgroundColor: '#549bd7',
            color: 'white'
        };

        const timelist = FREQUENCY.map((time, index) => {
            return (
                <li onClick={this.onClick}
                    style={FREQUENCY[index]==selectedTime ? selectedStyle : unselectedStyle}
                    key={index}
                    value={time}>
                    {`${time/1000}sec`}
                </li>
            );
        });

        const timerStyle={
            color: '#347bb7',
        };

        return (
            <div style={timerStyle}>
                <ul className="list-inline">
                    <li>Update interval:</li>
                    {timelist}
                    <li>{'  '}</li>
                    <li style={timeStyle}>{totalSeconds}</li>
                    <li>{' '}sec to next Update: </li>
                </ul>
            </div>
        );
    }
}

TimeSwitcherPanel.propTypes = {
    changeTimeOfUpdateAction: PropTypes.func.isRequired,
    incrementSecondsAction: PropTypes.func.isRequired,
    selectedTime: PropTypes.number,
    totalSeconds: PropTypes.number
};

export default TimeSwitcherPanel;
