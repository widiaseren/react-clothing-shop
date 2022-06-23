import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { logger } from './middleware/logger';
import { rootReducer } from './root-reducer';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['user'] //not include
  whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  thunk
].filter(
  Boolean //when false not show anything
);

const composedEnhancer = (
  process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// const composedEnhancers = compose(applyMiddleware(...middleWares));
const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);