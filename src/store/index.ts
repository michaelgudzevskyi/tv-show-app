import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import reducers from './ducks';

const persistConfig = {
  key: 'root',
  storage,
};

const initialState = {};
const middleware = [thunk];
const persistedReducer = persistReducer(persistConfig, reducers);

const win = window as any;

const composeEnhancers =
  typeof window === 'object' && win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store: any = createStore(persistedReducer, initialState, enhancer);

const persistor = persistStore(store);

export { store, persistor };
