import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default function configureStore(initialState = {}) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers'); // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }
}
