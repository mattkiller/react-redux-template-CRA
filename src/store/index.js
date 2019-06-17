import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';

const middlewares = [thunkMiddleware];

const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [];


if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-underscore-dangle
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  middlewareEnhancer,
  ...enhancers,
);

const store = createStore(reducer, undefined, composedEnhancers);

export default store;
