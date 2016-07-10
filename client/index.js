import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import configureStore from './reducers';
import createRoutes from './routes';

const store = configureStore();

render((
  <Provider store={store}>
    {createRoutes(browserHistory)}
  </Provider>
),

document.getElementById('app'));
