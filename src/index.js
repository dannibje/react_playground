import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from "./routes";
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import './styles/styles.css'; //webpack getur líka importað css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'rxjs';

const theRealStore = configureStore({});

render (
    <Provider store={theRealStore}>
        <Router history={browserHistory} routes={routes}/> 
    </Provider>
    , document.getElementById('app')
);