import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<h1>Test React Components</h1>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
