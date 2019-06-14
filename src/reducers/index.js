import { combineReducer } from 'redux';
import todo from './todo';

const rootReducer = () => combineReducer({
    todo
});

export default rootReducer;