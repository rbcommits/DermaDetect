import React from 'react';
import BrowseForum from './BrowseForum.js'
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import Login from './Login.js'
import { loginUser } from '../redux/actions/actions.js'
import * as sessionActions from '../redux/actions/session';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {get} from '../rest/rest.js'
//import { Switch, Route, BrowserRouter, Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
import  UserProfile  from './UserProfile.js';
import CalendarDemo from './CalendarDemo.jsx';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom'

class Index extends React.Component{


    constructor(props)
    {
        super(props);
        this.updateLogin = this.updateLogin.bind(this)
        this.state = {
            renderUI: false
        }

        
    }
    updateLogin(user)
    {
        const { login } = this.props.actions

        //this.props.dispatch(loginUser(user))
        login(user)
        this.setState({renderUI: !this.state.renderUI})
    }
//<BrowseForum />
    render()
    {
        if(this.props.logged_in)
        {
            return(
                <Router>
                <div>
                    <Header />
                    <div className="row  adjustNavbarHeight">
                    
                        <Sidebar />
                        <Switch>
                            <Route exact path="/" component={BrowseForum}/>
                            <Route path="/appointments" component={CalendarDemo}/>
                            <Route path="/users/:userID" component={UserProfile}/>
                        </Switch>
                    </div>
                </div>
                </Router>
            );
        }
    else
        {
            return(
                <div>
                    <Login loginHandler={ (user) => this.updateLogin(user) } />
                </div>
            );
        }
    }

}

/*


if(this.props.logged_in)
            {
                return(
                    <div>
                        <Header />
                        <div className="row  adjustNavbarHeight">
                            <Sidebar />
                            
                            <UserProfile />
                        </div>
                    </div>
                );
            }
        else
            {
                return(
                    <div>
                        <Login loginHandler={ (user) => this.updateLogin(user) } />
                    </div>
                );
            }

            */




const mapStateToProps = state => {

    return {
      user: state.session.user || "null",
      logged_in: state.session.authenticated
    }
  }
  
const mapDispatchToProps = dispatcher => {
    return {
        dispatch: dispatcher,
        actions: bindActionCreators(sessionActions, dispatcher)
        }
    }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Index)