import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(logger));

export default store;
