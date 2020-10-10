/* eslint-disable no-undef */
import {applyMiddleware, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import appReducer from './reducers';
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const logger = createLogger({
  collapsed: true,
});

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(logger)),
);


export default store;
