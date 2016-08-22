/**
 * Created by Admin on 22.08.2016.
 */

import React, { Component, PropTypes } from 'react';

class ModalWindow extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: this.props.isOpen
        };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
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
        if (!isOpen) {
            return null;
        }
        else {
            return (
                <div>
                    <div>
                        <h1>
                            Hello! I'm a modal window!
                        </h1>
                    </div>
                </div>
            )
        }

    }
}

ModalWindow.propTypes = {
    isOpen: React.PropTypes.bool
};

ModalWindow.defaultProps = {
    isOpen: false
};

export default ModalWindow;