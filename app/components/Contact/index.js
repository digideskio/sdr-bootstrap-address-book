import React, {Component} from 'react';

class Contact extends Component {

    render() {
        return (
            <li className="list-group-item">
                <img className="img-circle" src={this.props.image} width="60px" height="60px" />
                <div>
                    <div> {this.props.name} </div>
                    <div> {this.props.phoneNumber} </div>
                </div>
            </li>
        );
    }
}

export default Contact;