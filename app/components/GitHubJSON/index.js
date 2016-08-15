/**
 * Created by DMedzatiy on 15-Aug-16.
 */

import React, { Component } from 'react';
import { readData } from './serverAPI';


class GitHubJSON extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            GitHubData: ''
        };
        this.onUserSubmit = this.onUserSubmit.bind(this);
    }

    onUserSubmit (e) {
        e.preventDefault();
        e.stopPropagation();
        const UserName = this.inputGitHubUserName.value.trim();
        if (UserName.length==0) {
            return;
        } else {
            this.setState({userName: UserName});
            let ResData = new Promise((resolve) => {
                let dat = readData(UserName);
                resolve(dat);
            });

            ResData.then(
                res => this.setState({GitHubData: res})
            );
        }
    }

    render() {

        const styleComp={
            padding:"2em"
        };
        const styleInput = {
            height: "33px",
            paddingLeft: "5px",
            border: "solid #337ab7 1px",
            borderRadius: "4px",
            marginRight: "5px"
        };

        return (
            <div style={styleComp}>
                <pre>
                    <div>
                        <label>User Name :</label>
                        {this.state.userName}
                    </div>
                    <div>
                        <label>GitHub Response :</label>
                        {JSON.stringify(this.state.GitHubData, null, 2)}
                    </div>
                </pre>
                <div style={{textAlign:"center"}}>
                    <input type="text"
                           placeholder="Enter GitHub user Name"
                           ref={me => this.inputGitHubUserName = me}
                           style={styleInput}
                    />
                    <button className="btn btn-primary" onClick={this.onUserSubmit}>Get data</button>
                </div>

            </div>
        )
    }
}

export default GitHubJSON;