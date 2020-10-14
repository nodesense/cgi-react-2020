import React from 'react';
import ReactDOM from 'react-dom';

// handled by webpack, extract plugin, css plugins..
import "./index.css"; 

import {
        BrowserRouter as Router, // url would like http://localhost:3000/about
        } from 'react-router-dom';


// default import
import App from './app/App';

ReactDOM.render((
                  <Router>
                    <App />
                  </Router> 
                ), 
                document.getElementById('root'));
