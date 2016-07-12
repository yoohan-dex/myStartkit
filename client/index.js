import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import storeCreator from './storeCreator';
import { selectLocationState } from './containers/App/selectors';

import 'sanitize.css/sanitize.css';
const initialState = {};
const store = storeCreator(initialState, browserHistory);

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: selectLocationState(),
});


render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>

, document.getElementById('app'));
