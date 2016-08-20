/**
 * Created by Olexiy Lyhun on 18.08.2016.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import { createStructuredSelector } from 'reselect';
import { getList } from './selectors';
import CommentList from '../../components/CommentList';
import styles from './styles.css';


let messages = {};
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
                    messages = res.messages;
                    if (!_.isEqual(this.props.messageList,messages))
                    {
                        this.props.newList(messages);
                        return;
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
        const styleForContainer = {
            padding: 0,
            boxSizing: 'border-box'
        };

        const styleForRow = {
            height: '100vh',
            display: 'table-row'
        };

        const styleForCol = {
            float: 'none',
            display: 'table-cell',
            padding: 0
        };
        // let block = document.getElementById('messages');
        // block.scrollTop = block.scrollHeight;
        return (
            <div id='messages' className={styles.chat} style={styleForContainer}>
                <div className="row" style={styleForRow}>
                    <div className="col-sm-9" style={styleForCol}>
                        <CommentList data={this.props.messageList}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    messageList: getList(),
})

export default connect(mapStateToProps, {...actionCreators})(ChatLoader);
