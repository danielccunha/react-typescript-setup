import {
  createStore,
  applyMiddleware,
  compose,
  Store,
  Middleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { ProductsState } from './ducks/products/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  products: ProductsState;
}

const sagaMiddleware = createSagaMiddleware();
const middleware: Middleware[] = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default store;
