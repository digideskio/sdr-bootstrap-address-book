/**
 * Created by DMedzatiy on 15-Aug-16.
 */
import React, { Component } from 'react';
import Chat from 'components/Chat';

let chats = {};

class ChatLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            progress: 0
        };

    }

    componentDidMount() {
        //Remove setTimeout before production :)
        fetch('/init').then(
            response => {
                this.setState({progress: 80});
                return response.json();
            },
            error => error
            ).then (
                res => {chats = res;
                        this.setState({progress: 100,
                                       loaded: true});
                    }
        );
    }

    render() {

        const width = this.state.progress.toString()+"%";

        const styleProgress = {
            width: width
        };

        if (this.state.loaded) {
            return (
                <Chat chats={chats} />
            )
        }
        else {
            return (
                <div>
                    <h1>Loading...</h1>
                    <div className="progress">
                        <div className="progress-bar"
                             role="progressbar"
                             aria-valuenow="0"
                             aria-valuemin="0"
                             aria-valuemax="100"
                             style={styleProgress}>
                            <span className="sr-only"></span>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default ChatLoader;
