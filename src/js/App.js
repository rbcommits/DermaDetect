'use strict';
import React from 'react';
import { Switch, Route, BrowserRouter, Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from "react-redux";
import ReactDOM from "react-dom"
import store from './redux/Store';
import Index from './components/Index';
import styles from '../css/styles.min.css'



ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact path='/' component={Index}/>
          
        </Switch>
      </Router>
    </BrowserRouter>
  </Provider>
), document.getElementById('app'));

/*
<Route render={(props) => (<div>404 not found</div>)}/>


  */