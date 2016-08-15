/**
 * Created by DMedzatiy on 15-Aug-16.
 */

import React, { Component } from 'react';

class GitHubJSON extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            GitHubData: {}
        };
        this.onUserSubmit = this.onUserSubmit.bind(this);
    }

    onUserSubmit (e) {
        e.preventDefault();
        e.stopPropagation();
        const UserName = this.inputGitHubUserName.value.trim();
        const URL = "https://api.github.com/users/" + UserName;
        this.setState({userName: UserName});

        fetch(URL, { method: 'get',
                                  headers: {'Accept': 'application/vnd.github.v3+json',
                                            'User-Agent': 'request'}
                                  }
        ).then (
            response => {
                console.log(response);
                if (response.status == 200) {
                    return response.json();
                } else {
                    if (response.status == 404 ) {
                        return {Error: "Wrong user name..."}
                    } else {
                        const error = new Error(response.statusText);
                        error.response = response;
                        throw error;
                    }
                }
            },
            error => {return error}
        ).then(
            result => {this.setState({GitHubData: result})},
            error => console.log(error)
        );

    }

    render() {

        return (
            <div>
                <pre>
                    <div>
                        <label>User Name :</label>
                        {this.state.userName}
                    </div>
                    <div>
                        <label>GitHub Responce :</label>
                        {JSON.stringify(this.state.GitHubData, null, 2)}
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