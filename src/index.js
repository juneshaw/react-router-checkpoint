import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store';
import 'bootswatch/dist/materia/bootstrap.min.css'
import './index.css';
import App from './App'

const storeInstance = store();

ReactDOM.render(
  <Provider store={storeInstance}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
