import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
// import { Provider } from './context_store/ContextAPI'
import store from './redux/store'
import { Provider } from 'react-redux'

// axios.defaults.baseURL = 'https://prms-jcf.herokuapp.com/'
axios.defaults.baseURL = 'http://localhost:8080/'

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
