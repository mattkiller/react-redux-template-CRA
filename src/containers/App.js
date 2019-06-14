import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Header from '../components/header';
import TodoList from '../containers/TodoList';
import AddTodo from '../containers/AddTodo';
import Routes from '../routes';
import store from '../store';


const App = () => {
    return (
        <div className="App">
            <Provider store={store}>
                <Header />
                <Routes />
                <TodoList />
                <AddTodo />
            </Provider>
        </div>
    );
}

export default App;
