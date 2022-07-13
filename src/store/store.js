import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { logger } from './middleware/logger';
import { rootReducer } from './root-reducer';

//saga setup
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['user'] //not include
  whitelist: ['cart']
}

//saga setup
const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleware //saga setup
].filter(
  Boolean //when false not show anything
);

const composedEnhancer = (
  process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// const composedEnhancers = compose(applyMiddleware(...middleWares));
const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composedEnhancers);

//saga setup
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);