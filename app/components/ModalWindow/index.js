/**
 * Created by Admin on 22.08.2016.
 */

import React, { Component, PropTypes } from 'react';
import styles from './styles.css';

class ModalWindow extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: this.props.isOpen,
            buttonDisabled: true,
            userName:''
        };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onInputChange(){
        if (this.userName.value.length > 0) {
            this.setState({userName: this.userName.value.trim(),
                           buttonDisabled: false })
        } else {
            this.setState({userName: this.userName.value.trim(),
                           buttonDisabled: true })
        }
    }

    onSubmit(){
        this.props.getUserName(this.state.userName);
        this.setState({buttonDisabled: true});
        this.close();
    }

    open() {
        this.setState({
            isOpen: true
        });
    }

    close() {
        this.setState({
            isOpen: false
        });
    }

    render() {
        const { isOpen } = this.state;
        const cancelButton = this.props.cancel ?
            <button type="button"
                    onClick={this.close}
                    className="btn btn-default">
                Cancel
            </button> : null;
        if (!isOpen) {
            return null;
        }
        else {
            return (
                <div className={styles['modal-backdrop']}>
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">{ this.props.headerText }</h3>
                        </div>
                        <div className="modal-body">
                            <h4>{ this.props.bodyText }</h4>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Your nickname..."
                                   value={this.state.value}
                                   ref={ me => this.userName = me }
                                   onChange={ this.onInputChange }
                            />
                        </div>
                        <div className="modal-footer">
                            {cancelButton}
                            <button type="button"
                                    className="btn btn-primary"
                                    onClick={ this.onSubmit }
                                    disabled={ this.state.buttonDisabled }>
                                Join the Chat
                            </button>
                        </div>
                    </div>
                    </div>
                </div>


            )
        }

    }
}

ModalWindow.propTypes = {
    isOpen: React.PropTypes.bool,
    getUserName: React.PropTypes.func,
    headerText: React.PropTypes.string.isRequired,
    bodyText: React.PropTypes.string.isRequired
};

ModalWindow.defaultProps = {
    isOpen: false
};

export default ModalWindow;