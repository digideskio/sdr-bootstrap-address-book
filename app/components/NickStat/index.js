/**
 * Created by Admin on 24.08.2016.
 */

import React, { Component } from 'react';
import { Link, Route } from 'react-router';

class NickStat extends Component {
    render(){
        const {nickName, messages,lastAt} = this.props.params;

        const lastPostAt= (messages > 0) ?
            "Last message was posted:"+lastAt : "";
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Nickname Statistics
                        </h3>
                    </div>
                    <div className="panel-body">
                        <h2>Nickname: {nickName}</h2>
                        <h3>Number of posts: {messages}</h3>
                        <h3>{lastPostAt}</h3>
                        <div style={{textAlign:"center", padding:"1em"}}>
                                <Link className="btn btn-default" to="/">Back to chat page</Link>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default NickStat;