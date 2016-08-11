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

  getValue() {
    return this.state.value;
  }

  setValue(value) {
    this.setState({value: value});
  }

  renderUserInput() {
    const {type, placeholder, className, value} = this.props;
    if (type == "text") {
      return (
        <input value={this.state.value} onChange={this.handleChange}
            type={type}
            placeholder={placeholder}
            className={className}
        />
      );
    } else {
      return (
        <input value={value} onChange={this.handleChange}
            type={type}
            placeholder={placeholder}
            className={className}
        />
      );
    }
  }
  render() {
    return (
      this.renderUserInput()
    )
  }
}

Input.propTypes = {
  type: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  className: React.PropTypes.string,
  value: React.PropTypes.string
};
