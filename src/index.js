import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import { connect, Provider } from 'react-redux';
import reducers from './reducers/index';

ReactDOM.render(
  <Provider store = {createStore(reducers)} >
    <App /> 
  </Provider>,
  document.getElementById('root'));
