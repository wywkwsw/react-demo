import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewApp from './NewApp'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { AppProviders } from './context/index'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers/index'
const store = createStore(rootReducer)
// ReactDOM.render(
//   <React.StrictMode>
//     <AppProviders>
//       <App />
//     </AppProviders>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
console.log('store',store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <NewApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
