import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions'

class SerhiiToDos extends Component {

  componentDidMount() {

  }

  render() {
    console.log(this.props)
    console.log(this.props.listOfTodo)
    console.log(this.props.countOfTodo)

    const {listOfTodo, countOfTodo, onSubmit} = this.props;

    return (
      <div>
      <form onSubmit={onSubmit}>
      <input className="form-control" ref={me =>
        this.input = me} />
      <button className="btn btn-success" type="submit">
      Add Todo
      </button>
        <h1>{countOfTodo}</h1>
        <ul>
          {listOfTodo !== undefined ? listOfTodo.map((text, index) => <li key={index}> {text} </li>) : <li>Type Todo</li>}
        </ul>
        </form>
        </div>
      )
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSubmit: (e) => {
      e.preventDefault();
      if (!e.target.querySelector('input').value.trim()) {
        return
      }
      dispatch(addTodo(e.target.querySelector('input').value))
      e.target.querySelector('input').value = ''
    },
    dispatch
  }
}

const mapStateToProps = (state) => {
  return {
    countOfTodo: state.get('addTodo').countOfTodo,
    listOfTodo: state.get('addTodo').listOfTodo
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SerhiiToDos)
