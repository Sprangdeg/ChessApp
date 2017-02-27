import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import DevTools from '../containers/DevTools.tsx';
import thunk from 'redux-thunk';
let createHistory = require('history/lib/createHashHistory');
let createLogger = require('redux-logger');
let { syncReduxAndRouter } = require('redux-simple-router');
import trackHistory from './Middleware';
 
const finalCreateStore = compose(
  debugStateHistory,
  applyMiddleware(thunk),
  applyMiddleware(createLogger()),
  trackHistory()                              // STATE HISTORY STORE ENHANCER
  DevTools.instrument()
)(createStore);
 
export const history = createHistory();
 
export default function configureStore() {
  const store = finalCreateStore(rootReducer);
  syncReduxAndRouter(history, store);
 
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
 
  return store;
}