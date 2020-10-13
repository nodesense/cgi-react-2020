import React from 'react';
import ReactDOM from 'react-dom';

// handled by webpack, extract plugin, css plugins..
import "./index.css"; 

// default import
import App from './app/App';

ReactDOM.render(<App />, 
                document.getElementById('root'));
