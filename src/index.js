import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import storage from 'redux-persist/lib/storage'
import reduxThunk from 'redux-thunk';

import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './search/SearchReducers';

const persistConfig = {
    key: 'root',
    whitelist: ['transactions', 'balance'],
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, {}, applyMiddleware(reduxThunk));
let persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
