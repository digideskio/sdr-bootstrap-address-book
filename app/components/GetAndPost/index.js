/**
 * Created by DMedzatiy on 18-Aug-16.
 */

import React, { Component } from 'react';
import { uniqueId } from 'lodash';

class GetAndPost extends Component {
    constructor(props){
        super(props);
        this.state = {
                chatId: "",
                messages: [

                ]
        };
        this.onClickGet = this.onClickGet.bind(this);
        this.onClickPost = this.onClickPost.bind(this);
    }
    onClickGet(){
        const messages = [];
        fetch('/init').then(
            response => {
                return response.json();
            },
            error => error
        ).then (
            res => {
                this.setState({chatId: res.chatId,
                                messages: res.messages});
            }
        );
    }

    onClickPost() {
        const newComment = {
            id: uniqueId(),
            author: this.inputForAuthor.value,
            text: this.inputForText.value
        };

        fetch('/post',
            {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(newComment)
            });


        this.inputForAuthor.value = '';
        this.inputForText.value = '';
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <pre>
                            {JSON.stringify(this.state,null,2)}
                        </pre>
                        <button
                            onClick={this.onClickGet}
                            className="btn btn-danger"
                        >Get Data
                        </button>
                    </div>
                    <div className="col-lg-6">
                        <input placeholder="author"
                               className="form-control"
                               ref={me => this.inputForAuthor = me}
                        />
                        <input placeholder="text"
                               className="form-control"
                               ref={me => this.inputForText = me}
                        />
                        <button
                                onClick={this.onClickPost}
                                className="btn btn-danger"
                        >Post
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default GetAndPost;
