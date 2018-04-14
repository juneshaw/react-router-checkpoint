import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom'
import store from './store';
import 'bootswatch/dist/materia/bootstrap.min.css'
import './index.css';

const storeInstance = store();

ReactDOM.render(
  <Provider store={storeInstance}>
    <Router>
       <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
