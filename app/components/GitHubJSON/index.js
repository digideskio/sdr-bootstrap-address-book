/**
 * Created by DMedzatiy on 15-Aug-16.
 */

import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import Input from 'components/Input';
import ReactDOM from 'react-dom';

const arr = [
    {id: uniqueId(), author: "Pete Hunt", text: "This is one comment"},
    {id: uniqueId(), author: "Jordan Walke", text: "This is *another* comment"},
    {id: uniqueId(), author: "Samuel Jackson", text: "Hello another one comment"}
];

const arr2 = [
    {id: uniqueId(), author: "Hunt", text: "This is one comment"},
    {id: uniqueId(), author: "Jordan Walke", text: "This is *another* comment"}
];

const arr3 = [
    {id: uniqueId(), author: "Pete Hunt", text: "This is one comment"},
];

let chats = {
    chat1: {
        name: 'Chat #1',
        messages: arr
    },
    chat2: {
        name: 'Chat #2',
        messages: arr2
    },
    chat3: {
        name: 'Chat #3',
        messages: arr3
    }
};



class GitHubJSON extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            GitHubData: {}
        };
        this.onUserSubmit = this.onUserSubmit.bind(this);
    }

    componentDidMount() {
        const UserName = "ipselon";
        const URL = "https://api.github.com/users/" + UserName;
        this.serverRequest = ReactDOM.findDOMNode().get(URL, function (result) {
            this.setState({userName: UserName,
                GitHubData: result});

        });
    }


    onUserSubmit (e) {
        e.preventDefault();
        e.stopPropagation();

    }

    render() {
        const jsonObj = chats;
        return (
            <div>
                <pre>
                    <div>
                        <label>User Name :</label>
                        {this.state.userName}
                    </div>
                    <div>
                        <label>GitHub Responce :</label>
                        {this.state.GitHubData}
                    </div>
                </pre>
                <input type="text"
                       placeholder="Enter GitHub user Name"
                       ref={me => this.inputGitHubUserName = me} />
                <button onClick={this.onUserSubmit}>Get data</button>
            </div>
        )
    }
}

export default GitHubJSON;