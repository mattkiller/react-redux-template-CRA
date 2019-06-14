import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Header from '../components/header';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Routes from '../routes';
import store from '../store';


const App = () => (
  <div className="App">
    <Provider store={store}>
      <Header />
      <Routes />
      <TodoList />
      <AddTodo />
    </Provider>
  </div>
);

export default App;
