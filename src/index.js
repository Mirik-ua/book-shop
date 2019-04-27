import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import  combineReducers  from './store/combine'
import logger from 'redux-logger'

const store = createStore(combineReducers,applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
document.getElementById('root'));
