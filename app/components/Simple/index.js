import React, {Component} from 'react';

class Simple extends Component {

    handleClick ()
    {
        alert('Hello stranger!');
    }
    render ()
    {
    return <button className="btn btn-primary" onClick={this.handleClick}> Say hello </button>;
    }
}

export default Simple;