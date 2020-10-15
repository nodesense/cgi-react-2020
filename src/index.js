import React from 'react';
import ReactDOM from 'react-dom';

// handled by webpack, extract plugin, css plugins..
import "./index.css"; 

import {
        BrowserRouter as Router, // url would like http://localhost:3000/about
        } from 'react-router-dom';

// execute the store.js
import store from  "./app/store"; // run in console

import {Provider} from 'react-redux';

// default import
import App from './app/App';
 
ReactDOM.render((
                <Provider store={store}>
                  <Router>
                    <App />
                  </Router> 
                </Provider>
                ), 
                document.getElementById('root'));
        
