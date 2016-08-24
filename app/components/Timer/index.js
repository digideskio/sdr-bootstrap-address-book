/**
 * Created by Admin on 24.08.2016.
 */

import React, {Component} from 'react';

class Timer extends Component{
    constructor(props){
        super(props);
        this.state = {
            secondsLeft: 0
        };
        this.tick = this.tick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (!(this.state.secondsLeft > 0)) {
            this.setState({secondsLeft: nextProps.startValue});
        }

    }
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    tick(){
        this.setState({secondsLeft: this.state.secondsLeft - 1});
    }

    render() {
        return (
            <div>{this.state.secondsLeft}</div>
        );
    }
}

export default Timer;