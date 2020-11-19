import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import authReducer from './Redux/actions/auth';
import postsReducer from './Redux/actions/posts';
const logger=({ getState }) => {
  return next => action => {
     console.log('action', action);
     const returnVal = next(action);
     console.log('state when action is dispatched', getState()); 
     return returnVal;
  }
}
const rootReducer = combineReducers({auth: authReducer,posts: postsReducer})
const store = createStore(rootReducer,applyMiddleware(thunk,logger));
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

