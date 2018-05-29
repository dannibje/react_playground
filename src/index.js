import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import history from './history';
import App from "./components/App";
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'rxjs';

const theRealStore = configureStore({});

ReactDOM.render (
    <Provider store={theRealStore}>
        <Router history={history}>
            <App/>
        </Router> 
    </Provider>
    , document.getElementById('app')
);