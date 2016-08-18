import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions'
import { onIncrementCounter } from 'containers/TodoApp/actions'
import { createStructuredSelector } from 'reselect';
import { getCountOfTodo, getListOfTodo } from './selectors'
import { getCounters } from 'containers/TodoApp/selectors'

class SerhiiComponent extends Component {



  render() {
    //console.log(this.props)
    const {listOfTodo, countOfTodo, onSubmit, globalCount} = this.props;

    const myGlobalCounter = globalCount.find(object =>  object.name == 'Serhii')
    const backgroundStyle = {
      backgroundColor: countOfTodo === myGlobalCounter.value ? 'green' : 'red',
      color: 'white',
      textAlign: 'left',
      listStyleType: 'none'
    }

    return (
      <div>
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <input className="form-control"/>
            <span className="input-group-addon">
              <input type="submit" value="add" />
            </span>
            <span className="input-group-addon">
              {countOfTodo}
            </span>
          </div>
        </form>
        <ul style={backgroundStyle}>
          {listOfTodo !== undefined ? listOfTodo.map((text, index) => <li key={index}>{text} </li>) : <li>Type todo</li>}
        </ul>
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
      dispatch(addTodo(e.target.querySelector('input').value));
      dispatch(onIncrementCounter("Serhii"));
      e.target.querySelector('input').value = '';
    },
    dispatch
  }
}

const mapStateToProps = createStructuredSelector({
  countOfTodo: getCountOfTodo(),
  listOfTodo: getListOfTodo(),
  globalCount: getCounters()
})


export default connect(mapStateToProps, mapDispatchToProps)(SerhiiComponent);
