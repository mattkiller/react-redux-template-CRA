import { ADD_TODO, TOGGLE_TODO } from '../actionTypes';

export function addTodo(text) {
    return { type: ADD_TODO, text }
  }
  
  export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
  }
  