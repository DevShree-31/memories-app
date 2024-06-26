import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {thunk} from 'redux-thunk' 
import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from './components/reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}><App /></Provider>
);

