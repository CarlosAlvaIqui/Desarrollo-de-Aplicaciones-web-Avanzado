import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import rootReducer from './store/reducers/reducer';

const composeEnhancers = 
    process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose;

const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    );
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
