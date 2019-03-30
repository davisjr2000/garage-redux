import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import App from './components/app';
import '../assets/stylesheets/application.scss';

// reducers
import carsReducer from './reducers/cars_reducer';

const initialState = {
  garage: prompt("What is your garage name?") || `garage${Math.floor(10 + (Math.random() * 90))}`,
  cars: []
}

const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: carsReducer
});

const store = createStore(reducers, initialState, middlewares);

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <App />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
