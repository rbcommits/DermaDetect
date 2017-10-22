import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import axios from 'axios';

export default class Authenticated extends React.Component {
  constructor(props)
  {
    super(props)
  }
  componentDidMount() {
    //const { dispatch, currentURL } = this.props
    const isLoggedIn = this.props.loggedIn;
    if (!isLoggedIn) {
      // set the current url/path for future redirection (we use a Redux action)
      // then redirect (we use a React Router method)
      console.log("User not logged in");
      
      //dispatch(setRedirectUrl(currentURL))
      //browserHistory.replace("/login")
    }
  }

  render() {
    const isLoggedIn = this.props.loggedIn;
    console.log("Testing user login in authenticate: ", isLoggedIn)
    if (isLoggedIn) {
      console.log("User is logged in!");
      return this.props.children;
    } else {
      //this.props.router.push('/Login');
      return null
    }
  }
}


/*
// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.
function mapStateToProps(state, ownProps) {

    console.log(state)
    return {
        //isLoggedIn: state.loggedIn,
        //currentURL: ownProps.location.pathname
    }
}
*/