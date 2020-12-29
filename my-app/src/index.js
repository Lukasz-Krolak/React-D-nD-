import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/indexRedux'
import './index.css';
import App from './components/App';
import middleware from './middleware'

let store = createStore(reducer, middleware)
render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);