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
            border:"solid white 1px",
            color: selectedTime/1000 === totalSeconds ? '#4c9689' : 'white'
        };
        const unselectedStyle = {border: "0px"};
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
        
        return (
            <div>
                <ul className="list-inline">
                    <li>Time Update:</li>
                    {timelist}
                    <li>Time to next Update: </li>
                    <li style={selectedStyle}>{totalSeconds}</li>
                    
                </ul>
            </div>
        );
    }
}

TimeSwitcherPanel.propTypes = {
    changeTimeOfUpdateAction: PropTypes.func.isRequired,
    incrementSecondsAction: PropTypes.func.isRequired,
    selectedTime: PropTypes.number,
    totalSeconds: PropTypes.number,
};

export default TimeSwitcherPanel;
