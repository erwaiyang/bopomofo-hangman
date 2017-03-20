import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reducers from '../reducers/index';

const middlewares = [];
const composedStore = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);
const storeCreator = composedStore(createStore);
const store = storeCreator(combineReducers(reducers));

export default store;
