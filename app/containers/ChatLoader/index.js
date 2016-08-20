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
            )
            .then(
                res=> {
                    messages = res.messages;
                    
                    if (!_.isEqual(this.props.messageList,messages))
                    {
                        this.props.newList(messages);
                    }
                        return setTimeout(this.getData, 3000);
                }
            )
            .catch(error => {
                alert(error.message);
                return setTimeout(this.getData, 3000);
            });
    }

    componentDidMount(){
        this.getData();
    }
    componentDidUpdate( PreviousProps , PreviousState ){
        this.chatList.scrollTop = this.chatList.scrollHeight;
    }

    render() {

        return (
            <div id='messages'
                 className={styles.chat}
                 ref={me => this.chatList = me}>
                <div className={styles.row}>
                    <div className={styles.col}>
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
