/**
 * Created by DMedzatiy on 16-Aug-16.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newUserName } from './actions';


class TodoApp extends Component {
    componentDidMount() {

    }

    render() {
        return(
            <div>
                <h3>Global state userName:  {this.props.userName.userName}</h3>
                        <input
                            id="username"
                            type="text"
                            placeholder="username"
                            onChange={this.props.onChange}
                        />


            </div>
        )
    }
}

/*TodoApp.propTypes = {
    userName: React.PropTypes.object,
    onChange: React.PropTypes.func
};

TodoApp.defaultProps = {
    userName: 'user'
};*/

function mapDispatchToProps(dispatch) {
    return {
        onChange: (e) => {
            e.preventDefault();
            dispatch(newUserName(e.target.value));
        },
        dispatch,
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.get('userName')
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);

