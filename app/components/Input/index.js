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
    const {type, placeholder, className, validation, borderRadius } = this.props;

    const style = {
        borderRadius: borderRadius,
        color: (!validation)? "": ((this.state.valid) ? '#4c9689' : "red")
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
