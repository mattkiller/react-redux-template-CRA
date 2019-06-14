import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { toggleTodo } from '../../actions/todo';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: (id) => {
    dispatch(toggleTodo(id));
  },
});

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={index} {...todo} onClick={() => toggleTodo(index)} />
    ))}
  </ul>
);


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
