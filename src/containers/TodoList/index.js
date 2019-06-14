import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux';
import { toggleTodo } from '../../actions/todo';

const mapStateToProps = (state) => ({
    todos: state.todos 
})

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const TodoList = ({ todos, toggleTodo }) => {

  return (
    <ul>
      {todos.map((todo, index) => (
        <Todo key={index} {...todo} onClick={() => toggleTodo(index)} />
      ))}
    </ul>
  )
}


export default connect(mapStateToProps,mapDispatchToProps)(TodoList)