'use strict';
import React from 'react';
import { Switch, Route, BrowserRouter, Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from "react-redux";
import ReactDOM from "react-dom"
import store from './redux/Store';
import Index from './components/Index';
import styles from '../css/styles.min.css'
import { sessionService } from 'redux-react-session';
import styles2 from '../css/calendar.css'

sessionService.initSessionService(store, { driver: 'COOKIES' });

ReactDOM.render((
    <Provider store={store}>
      <Index />
    </Provider>
), document.getElementById('app'));

/*
< Route render = {
  (props) => (
    <div>404 not found</div>
  )
} /> <BrowserRouter>
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path='/Browse' component={BrowseForum}/>
      <Route exact path='/Profile' component={UserProfile}/>
    </Switch>
  </Router>
</BrowserRouter>

  */