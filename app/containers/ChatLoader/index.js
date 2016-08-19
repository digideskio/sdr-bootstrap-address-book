/**
 * Created by Olexiy Lyhun on 18.08.2016.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import { createStructuredSelector } from 'reselect';
import { getList } from './selectors';
import CommentList from '../../components/CommentList';

let chats = {};

class ChatLoader extends Component {

    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
    }

    getData()
    {
        fetch('/init')
            .then(
                response => {
                    return response.json();
                },
                error => error
            )
            .then(
                res=> {
                    chats = res.chat1;
                    if (!_.isEqual(this.props.messageList,chats.messages))
                    {
                        this.props.newList(chats.messages);
                    }
                    else {
                        return setTimeout(this.getData, 3000);
                    }
                }
            );
    }

    render() {
        setTimeout(this.getData, 1000);
        console.log(this.props.messageList);
        return (
            <CommentList data={this.props.messageList}/>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    messageList: getList(),
})

export default connect(mapStateToProps, {...actionCreators})(ChatLoader);