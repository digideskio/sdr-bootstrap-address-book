import React, {Component} from 'react';

export default class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      valid: true
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({value: nextProps.value});
  }

  handleChange = (e) => {
      const value = e.target.value;
      const valid = this.props.validation ? this.props.isValid(value): true;
      this.setState({value: value,
                     valid: valid});
  };

  getValue() {
    return this.state.value;
  }

  render() {
    const {type, placeholder, className, validation } = this.props;

    const style = {
        color: (!validation)? "": ((this.state.valid) ? "green" : "red")
    };

    return (
        <input value={this.state.value}
               onChange={this.handleChange}
               type={type}
               placeholder={placeholder}
               className={className}
               style={style}

        />
    )
  }
}

Input.propTypes = {
  type: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  className: React.PropTypes.string,
  value: React.PropTypes.string,
  validation: React.PropTypes.bool,
  isValid: React.PropTypes.func
};

Input.defaultProps = {
    validation: false
};
