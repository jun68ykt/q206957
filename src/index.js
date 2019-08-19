import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CounterContainer from './containers/Counter';
import reducer from './reducers'

const store = createStore(reducer);

render(
  <Provider store={store}>
    <CounterContainer name="foo" />
    <CounterContainer name="bar" />
  </Provider>,
  document.getElementById('root')
);
