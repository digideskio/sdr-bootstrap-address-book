import React, {Component} from 'react';

export default class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <input value={this.state.value} onChange={this.handleChange}/>
    )
  }
}
