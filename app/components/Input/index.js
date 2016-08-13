import React, {Component} from 'react';

export default class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({value: nextProps.value});
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  };

  getValue() {
    return this.state.value;
  }

  render() {
    const {type, placeholder, className} = this.props;
    return (
        <input value={this.state.value}
               onChange={this.handleChange}
               type={type}
               placeholder={placeholder}
               className={className}
        />
    )
  }
}

Input.propTypes = {
  type: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  className: React.PropTypes.string,
  value: React.PropTypes.string
};
