import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './Redux/actions/auth';
const logger=({ getState }) => {
  return next => action => {
     console.log('action', action);
     const returnVal = next(action);
     console.log('state when action is dispatched', getState()); 
     return returnVal;
  }
}
const store = createStore(reducer,applyMiddleware(thunk,logger));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

